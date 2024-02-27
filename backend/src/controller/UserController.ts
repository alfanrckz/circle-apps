import { Request, Response } from "express";
import UserServices from "../services/UserServices";

export default new (class UserController {
  // async getCurrent(req: Request, res: Response) {
  //   try {
  //     const response = await UserServices.getCurrent(res.locals.session.id);
  //     res.status(200).json(response);
  //   } catch (error) {
  //     res.status(error.status).json({ message: "Internal Server Error" });
  //   }
  // }
})();
