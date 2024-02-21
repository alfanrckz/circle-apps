import * as bcrypt from "bcrypt";
import { Repository } from "typeorm";
import * as jwt from "jsonwebtoken";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { loginSchema, registerSchema } from "../utils/validator/auth";
import { Request } from "express";
import ResponseError from "../error/responseError";
import { validate } from "../utils/validator/validation";

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
        fullName: reqBody.full_name,
        username: reqBody.username,
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

  async login(reqBody: Request) {
    const isValid = validate(loginSchema, reqBody);

    const chkUser = await this.authRepository.findOne({
      where: { email: isValid.email },
      select: {
        id: true,
        email: true,
        username: true,
        fullName: true,
        password: true,
      },
    });
    if (!chkUser) throw new ResponseError(401, "Username not registered yet!");

    const isEqual = await bcrypt.compare(isValid.password, chkUser.password);
    if (!isEqual)
      throw new ResponseError(401, "Username or Password is not correct!");

    const token = jwt.sign(
      { id: chkUser.id, username: chkUser.username },
      process.env.SECRET_KEY,
      {
        expiresIn: "1d",
      }
    );
    return {
      message: "Login success",
      user: {
        id: chkUser.id,
        fullName: chkUser.fullName,
        username: chkUser.username,
        email: chkUser.email,
      },
      token: token,
    };
  }

  async check(loginSession: any): Promise<any> {
    try {
      const user = await this.authRepository.findOne({
        where: {
          id: loginSession.user.id,
        },
        relations: ["follower", "following"],
      });

      return {
        message: "Token is valid!",
        user: {
          id: user.id,
          fullName: user.fullName,
          username: user.username,
          email: user.email,
          picture: user.picture,
          bio: user.bio,
          follower: user.follower.length,
          following: user.following.length,
        },
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
})();
