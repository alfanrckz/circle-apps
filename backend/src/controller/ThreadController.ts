import { Request, Response } from "express";
import ThreadsServices from "../services/ThreadsServices";

export default new (class ThreadController {
  async create(req: Request, res: Response) {
    try {
      let data;
      if (!req.file) {
        data = {
          content: req.body.content,
          user: req.body.user,
        };
      } else {
        data = {
          content: req.body.content,
          image: req.file.filename,
          user: req.body.user,
        };
      }

      const response = await ThreadsServices.createThread(data);
      res.status(201).json(response);
    } catch (error) {
      res.status(error.status).json(error.message);
    }
  }
})();
