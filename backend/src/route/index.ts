import * as express from "express";
import AuthController from "../controller/AuthController";
import UserController from "../controller/UserController";

const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

router.get("/user/current", UserController.getCurrent);

export default router;
