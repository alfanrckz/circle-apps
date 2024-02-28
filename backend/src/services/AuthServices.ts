import * as bcrypt from "bcrypt";
import { Repository } from "typeorm";
import * as jwt from "jsonwebtoken";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { loginSchema, registerSchema } from "../utils/validator/auth";
import { Request, Response } from "express";
import ResponseError from "../error/responseError";
import { validate } from "../utils/validator/validation";

export default new (class Authservice {
  private readonly AuthRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async register(reqBody: any): Promise<any> {
    try {
      console.log(reqBody);
      const { value, error } = registerSchema.validate(reqBody);
      if (error) {
        throw new Error("Email is already registered");
      }

      const isEmailRegistered = await this.AuthRepository.count({
        where: {
          email: reqBody.email,
        },
      });
      if (isEmailRegistered > 0) {
        throw new Error("Email is already registered");
      }

      const password = await bcrypt.hash(reqBody.password, 10);
      console.log(password);

      const user = this.AuthRepository.create({
        fullName: value.fullName,
        username: value.username,
        email: value.email,
        password: password,
      });
      console.log(user);

      const data = await this.AuthRepository.save(user);
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

    const chkUser = await this.AuthRepository.findOne({
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

  // async check(loginSession: any): Promise<any> {
  //   try {
  //     const user = await this.AuthRepository.findOne({
  //       where: {
  //         id: loginSession.user.id,
  //       },
  //       relations: ["follower", "following"],
  //     });

  //     return {
  //       message: "Token is valid!",
  //       user: {
  //         id: user.id,
  //         fullName: user.fullName,
  //         username: user.username,
  //         email: user.email,
  //         picture: user.picture,
  //         bio: user.bio,
  //         follower: user.follower.length,
  //         following: user.following.length,
  //       },
  //     };
  //   } catch (error) {
  //     return res.status(500).json({ mesage: "apasih" });
  //   }
  // }

  async check(req: Request, res: Response): Promise<Response | void> {
    try {
      const userLogin = res.locals.loginSession;
      const user = await this.AuthRepository.findOne({
        where: {
          id: userLogin.obj.id,
        },
      });

      return res.status(200).json({ message: "Token is valid!", user });
    } catch (error) {
      return res.status(500).json({ message: error });
    }
  }
})();
