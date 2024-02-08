import * as bcrypt from "bcrypt";
import { Repository } from "typeorm";
import * as jwt from "jsonwebtoken";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { loginSchema, registerSchema } from "../utils/validator/auth";

export default new (class Authservice {
  private readonly authRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async register(reqBody: any): Promise<any> {
    try {
      const { error } = registerSchema.validate(reqBody);
      if (error) {
        console.log(error);
        throw new Error("Email is already registered");
      }

      const isEmailRegistered = await this.authRepository.count({
        where: {
          email: reqBody.email,
        },
      });
      if (isEmailRegistered > 0) {
        throw new Error("Email is already registered");
      }

      const password = await bcrypt.hash(reqBody.password, 10);
      console.log(password);

      const user = this.authRepository.create({
        full_Name: reqBody.full_name,
        userName: reqBody.username,
        email: reqBody.email,
        password: password,
      });
      console.log(user);

      const data = await this.authRepository.save(user);
      console.log(data);
      return {
        message: "Registered succesfull",
        user: user,
      };
    } catch (error) {
      throw new Error("Something went wrong on the server");
    }
  }

  async login(reqBody: any): Promise<any> {
    try {
      const { error } = loginSchema.validate(reqBody);
      if (error) {
        throw new Error(error.details[0].message);
      }
      const user = await this.authRepository.findOne({
        where: {
          email: reqBody.email,
        },
        select: ["id", "full_Name", "email", "userName", "password"],
      });
      if (!user) {
        throw new Error("Email / Password is wrong");
      }
      const isPasswordValid = await bcrypt.compare(
        reqBody.password,
        user.password
      );

      if (!isPasswordValid) {
        throw new Error("Email / password is wrong!");
      }

      const token = jwt.sign({ user }, "success", { expiresIn: "1d" });

      return {
        message: "Login Successfull",
        user: {
          id: user.id,
          full_name: user.full_Name,
          username: user.userName,
          email: user.email,
        },
        token: token,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
})();
