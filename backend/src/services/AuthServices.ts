import * as bcrypt from "bcrypt";
import { Repository } from "typeorm";

import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { registerSchema } from "../utils/validator/auth";

class Authservice {
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
        name: reqBody.full_name,
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
}
