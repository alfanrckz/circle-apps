import * as express from "express";
import AuthController from "../controller/AuthController";

const router = express.Router();

router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

export default router;
