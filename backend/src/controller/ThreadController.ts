import { Request, Response } from "express";
import ThreadsServices from "../services/ThreadsServices";

export default new (class ThreadController {
  async getAll(req: Request, res: Response) {
    try {
      const response = await ThreadsServices.getThreads();
      res.status(200).json(response);
    } catch (error) {
      res.status(error.status).json({ message: error.message });
    }
  }

  async get(req: Request, res: Response) {
    try {
      const response = await ThreadsServices.getThread(req.params);
      res.status(200).json(response);
    } catch (error) {
      res.status(error.status).json({ message: error.message });
    }
  }

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

  async update(req: Request, res: Response) {
    try {
      let data;

      if (!req.file) {
        data = {
          content: req.body.content,
        };
      } else {
        data = {
          content: req.body.content,
          image: req.file.filename,
        };
      }
      console.log("cont", data);

      const response = await ThreadsServices.updateThread(data, req.params);

      res.status(200).json(response);
    } catch (error) {
      res.status(error.status).json({ message: error.message });
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const response = await ThreadsServices.delete(req.params);

      res.status(200).json(response);
    } catch (error) {
      res.status(error.status).json({ message: error.message });
    }
  }
})();
