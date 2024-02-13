import * as express from "express";
import AuthController from "../controller/AuthController";
import UserController from "../controller/UserController";

const router = express.Router();
//auth
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
//user
router.get("/user/current", UserController.getCurrent);
//thread
router.post("/thread");

export default router;
