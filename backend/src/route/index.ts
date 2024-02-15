import * as express from "express";
import AuthController from "../controller/AuthController";
import UserController from "../controller/UserController";
import ThreadController from "../controller/ThreadController";
import authMiddleware from "../middleware/auth";
import uploadFile from "../middleware/uploadFile";

const router = express.Router();
//auth
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);
//user
router.get("/user/current", UserController.getCurrent);
//thread
router.post("/thread", uploadFile.upload("image"), ThreadController.create);
router.patch(
  "/thread/update/:id",
  authMiddleware.auth,
  ThreadController.update
);

export default router;
