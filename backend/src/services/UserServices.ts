import { Repository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";

export default new (class UserService {
  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userRepository.find({
        select: ["id", "username", "email", "fullName", "bio", "picture"],
      });
      return res.status(200).json({
        message: "Success Getting all users",
        data: users,
      });
    } catch (error) {
      res.status(500).json({
        error: "Error while finding users",
      });
    }
  }
})();
