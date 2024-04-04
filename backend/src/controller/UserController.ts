import { Request, Response, response } from "express";
import UserServices from "../services/UserServices";

export default new (class UserController {
  find(req: Request, res: Response) {
    UserServices.find(req, res);
  }

  async updateUser(req: Request, res: Response) {
    try {
      const response = await UserServices.updateUser(
        parseInt(req.params.id),
        res.locals.session.id,
        req.body
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(error.status) ||
        res.status(500).json({ message: error.message });
    }
  }

  async uploadPicture(req: Request, res: Response) {
    try {
      const response = await UserServices.uploadPicture(
        parseInt(req.params.id),
        res.locals.session.id,
        req.file.filename
      )
      res.status(200).json(response);
    } catch (error) {
      res.status(error.status) ||
        res.status(500).json({ message: error.message });
    }
  }

  async uploadCover(req: Request, res: Response) {
    try {
      const response = await UserServices.uploadCover(
        parseInt(req.params.id),
        res.locals.session.id,
        req.file.filename
      );
      res.status(200).json(response);
    } catch (error) {
      res.status(error.status) ||
        res.status(500).json({ message: error.message });
    }
  }
})();
