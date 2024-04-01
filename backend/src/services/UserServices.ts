import { Repository, EntityManager } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import FollowServices from "./FollowServices";

export default new (class UserService {
  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async find(req: Request, res: Response) {
    try {
      const manager = AppDataSource.createEntityManager();

      const users = await this.userRepository.find({
        select: ["id", "username", "email", "fullName", "bio", "picture"],
        relations: {
          follower: true,
          following: true,
        }
      });

      // return await Promise.all(
      //   users.map(async (val) => {
      //     const follow = await FollowServices.getFollow(val.id);

      //     console.log("follow", follow);
          

      //     // return (
      //     //   ...val,
      //     //   isFollow: follow
      //     // )
      //   })

      // );
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
