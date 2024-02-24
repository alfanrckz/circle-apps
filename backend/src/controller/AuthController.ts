import { Request, Response } from "express";
import Authservice from "../services/AuthServices";
import AuthServices from "../services/AuthServices";

export default new (class AuthController {
  async register(req: Request, res: Response) {
    try {
      const response = await Authservice.register(req.body);
      console.log(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const response = await Authservice.login(req.body);
      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async check(req: Request, res: Response) {
    try {
      const loginSession = res.locals.loginSession;
      const response = await AuthServices.check(loginSession);

      return res.status(200).json(response);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
})();
