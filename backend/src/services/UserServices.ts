import { Repository } from "typeorm";
import { User } from "../entity/User";
import { AppDataSource } from "../data-source";

export default new (class UserService {
  private readonly userRepository: Repository<User> =
    AppDataSource.getRepository(User);

  async getCurrent(id) {
    const response = await this.userRepository.findOne({
      where: id,
      relations: {
        follower: true,
        following: true,
      },

      select: {
        id: true,
        fullName: true,
        username: true,
        picture: true,
        cover_photo: true,
        bio: true,
        follower: true,
        following: true,
      },
    });

    return {
      id: response.id,
      fullName: response.fullName,
      username: response.username,
      picture: response.picture,
      cover_photo: response.cover_photo,
      bio: response.bio,
      follower: response.follower.length,
      following: response.following.length,
    };
  }
})();
