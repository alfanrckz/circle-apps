import { Request, Response, response } from "express";
import ThreadsServices from "../services/ThreadsServices";

export default new (class ThreadsController {
  async getThreads(req: Request, res: Response) {
    try {
     const response = await
   
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async findOne(req: Request, res: Response) {
    try {
    } catch (error) {}
  }
})();
