import { Repository } from "typeorm";
import { Like } from "../entity/Like";
import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { createLikeSchema } from "../utils/validator/like";

export default new (class LikeServices {
  private readonly likeRepository: Repository<Like> =
    AppDataSource.getRepository(Like);

  async find(req: Request, res: Response): Promise<Response> {
    try {
      const like = await this.likeRepository.find({
        relations: ["user", "thread"],
      });
      // console.log(like);
      return res.status(200).json({
        message: "Success",
        data: like,
      });
    } catch (error) {
      return res.status(500).json({
        error: "Error while finding like",
        message: error,
      });
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const { error, value } = createLikeSchema.validate(data);
      if (error) return res.status(400).json(error.details[0].message);
      // console.log("value", value);

      const loginSession = res.locals.session;
      // console.log("loginSession", loginSession);
      const likeSelected = await this.likeRepository.findOne({
        where: {
          user: {
            id: loginSession.id,
          },
          thread: {
            id: value.thread,
          },
        },
      });

      // unlike handle
      if (likeSelected) {
        await this.likeRepository.remove(likeSelected);
        return res.status(200).json({
          message: "Like removed succesfully",
        });
      }
      // console.log(likeSelected);

      const like = this.likeRepository.create({
        thread: value.thread,
        user: {
          id: loginSession.id,
        },
      });
      // console.log("objextLike", like);

      const response = await this.likeRepository.save(like);
      return res.status(200).json({
        message: "Like created succesfully",
        data: response,
      });
    } catch (error) {
      return res.status(500).json({
        error: "Error while creating like",
        message: error,
      });
    }
  }

  // async create(reqBody: any, loginSession: any): Promise<any> {
  //   try {
  //     const isLikeExist = await this.likeRepository.count({
  //       where: {
  //         user: {
  //           id: loginSession.user.id,
  //         },
  //         thread: {
  //           id: reqBody.thread_id,
  //         },
  //       },
  //     });

  //     if (isLikeExist > 0) {
  //       throw new Error("You already like this thread!");
  //     }

  //     const like = this.likeRepository.create({
  //       thread: {
  //         id: reqBody.thread_id,
  //       },
  //       user: {
  //         id: loginSession.user.id,
  //       },
  //     });

  //     await this.likeRepository.save(like);

  //     return {
  //       message: "You liked this thread!",
  //       like: like,
  //     };
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }

  // async delete(threadId: number, loginSession: any): Promise<any> {
  //   try {
  //     const like = await this.likeRepository.findOne({
  //       where: {
  //         thread: {
  //           id: threadId,
  //         },
  //         user: {
  //           id: loginSession.user.id,
  //         },
  //       },
  //     });

  //     if (!like) {
  //       throw new Error("You didn't like this thread!");
  //     }

  //     await this.likeRepository.delete({
  //       id: like.id,
  //     });

  //     return {
  //       message: "You unliked this thread!",
  //       like: like,
  //     };
  //   } catch (error) {
  //     throw new Error(error.message);
  //   }
  // }
})();
