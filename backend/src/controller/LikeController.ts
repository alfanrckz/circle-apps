import { Request, Response } from "express";
import LikeServices from "../services/LikeServices";

export default new (class LikeController {
  async findAll(req: Request, res: Response) {
    LikeServices.find(req, res);
  }

  async create(req: Request, res: Response) {
    LikeServices.create(req, res);
  }

  // async create(req: Request, res: Response) {
  //   try {
  //     const loginSession = res.locals.loginSession;

  //     const response = await LikeServices.create(req.body, loginSession);
  //     return res.status(200).json(response);
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }

  // async delete(req: Request, res: Response) {
  //   try {
  //     const loginSession = res.locals.loginSession;
  //     const threadId = parseInt(req.params.thread_id);

  //     const response = await LikeServices.delete(threadId, loginSession);
  //     return res.status(200).json(response);
  //   } catch (error) {
  //     return res.status(500).json({ error: error.message });
  //   }
  // }
})();
