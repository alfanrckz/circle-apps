import { Request, Response } from "express";
import ReplyServices from "../services/ReplyServices";

export default new (class ReplyController {
  find(req: Request, res: Response) {
    ReplyServices.find(req, res);
  }
  // create(req: Request, res: Response) {
  //   ReplyServices.create(req, res);
  // }

  async create(req: Request, res: Response) {
    try {
      let data;
      if (!req.file) {
        data = {
          content: req.body.content,
          user: req.body.user,
          thread: req.body.thread,
        };
      } else {
        data = {
          content: req.body.content,
          image: req.file.filename,
          user: req.body.user,
          thread: req.body.thread,
        };
      }

      const response = await ReplyServices.create(data);
      res.status(201).json(response);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }
})();
