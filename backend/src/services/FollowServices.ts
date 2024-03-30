import { Equal, Repository } from "typeorm";
import { Follow } from "../entity/Follow";
import { AppDataSource } from "../data-source";
import { User } from "../entity/User";

export default new (class FollowServices {
  private readonly followRepository: Repository<Follow> =
    AppDataSource.getRepository(Follow);

  async getFollow(id) {
    const follower = await AppDataSource.getRepository(User).find({
      where: {
        following: { follower: Equal(id) },
      },
      relations: {
        following: true,
      },
    });
    const following = await AppDataSource.getRepository(User).find({
      where: { follower: { following: Equal(id) } },
      relations: {
        follower: true,
      },
    });

    return {
      follower,
      following,
    };
  }

  async follow(userId, reqBody: any) {
    try {
      const checkid = await AppDataSource.getRepository(User).findOne({
        where: { id: Equal(reqBody.following) },
      });

      console.log("checkid :", checkid);

      if (!checkid) {
        throw new Error("User not found");
      }

      const isFollow = await this.followRepository.count({
        where: {
          follower: Equal (reqBody.following),
          following: Equal (userId)
        },
      });

      console.log("isFollow :", isFollow);

      if (isFollow > 0) {
        throw new Error("You already follow this user");
        // return res.status(500).json({ message: "You already follow this user" });
        // console.log("You already follow this user");
        // return
      }

      await this.followRepository.save({
        following: userId, 
        follower: reqBody.following
      });
      return {
        message: "Follow Success",
      };
    } catch (error) {
      throw error;
    }
  }

  async unfollow(following, follower) {
    await this.followRepository.delete({ following, follower });
    return {
      message: "Unfollow Success",
    };
  }
})();
