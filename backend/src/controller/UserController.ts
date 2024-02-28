import { Request, Response } from "express";
import UserServices from "../services/UserServices";

export default new (class UserController {
  find(req: Request, res: Response) {
    UserServices.find(req, res);
  }
})();
