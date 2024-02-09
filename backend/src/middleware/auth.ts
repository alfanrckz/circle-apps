import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";

export default new (class AuthMiddleWare {
  auth(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer"))
      return res.status(403).json({ message: "Please Login first!!!!" });

    const token = authHeader.split(" ")[1];
    try {
      const verif = jwt.verify(token, process.env.SECRET_KEY);
      res.locals.session = verif;
      next();
    } catch (error) {
      return res.status(401).json({ message: "TOken isn't valid" });
    }
  }
})();
