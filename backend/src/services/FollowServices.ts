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

  async follow(follower, following) {
    await this.followRepository.save({ following, follower });
    return {
      message: "Unfollow Success",
    };
  }

  async unfollow(following, follower) {
    await this.followRepository.delete({ following, follower });
    return {
      message: "Unfollow Success",
    };
  }
})();
