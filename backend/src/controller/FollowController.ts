import { Request, Response } from "express";
import FollowServices from "../services/FollowServices";

export default new (class FollowController {
  async getFollow(req: Request, res: Response) {
    try {
      const response = await FollowServices.getFollow(res.locals.session.id);
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async follow(req: Request, res: Response) {
    try {
      const response = await FollowServices.follow(
        req.body.following,
        res.locals.session.id
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }

  async unfollow(req: Request, res: Response) {
    try {
      const response = await FollowServices.unfollow(
        req.query.following,
        res.locals.session.id
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  }
})();
