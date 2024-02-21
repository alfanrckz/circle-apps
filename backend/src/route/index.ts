import * as express from "express";
import AuthController from "../controller/AuthController";
import UserController from "../controller/UserController";
import ThreadController from "../controller/ThreadController";
import authMiddleware from "../middleware/auth";
import uploadFile from "../middleware/uploadFile";
import FollowController from "../controller/FollowController";
import LikeController from "../controller/LikeController";
import ReplyController from "../controller/ReplyController";

const router = express.Router();
//auth
router.post("/register", AuthController.register);
router.post("/login", AuthController.login);

//user
router.get("/user/current", UserController.getCurrent);

//thread
router.get("/thread", ThreadController.getAll);
router.get("/thread/:id", ThreadController.get);
router.post("/thread", uploadFile.upload("image"), ThreadController.create);
router.patch(
  "/thread/:id",
  authMiddleware.auth,
  uploadFile.upload("image"),
  ThreadController.update
);
router.delete("/thread/:id", authMiddleware.auth, ThreadController.delete);

//follow
router.post("/follow", authMiddleware.auth, FollowController.follow);
router.get("/follow", authMiddleware.auth, FollowController.getFollow);
router.delete("/unfollow", authMiddleware.auth, FollowController.unfollow);

//like
router.get("/like", LikeController.findAll);
router.post("/like", authMiddleware.auth, LikeController.create);

//reply
router.post("/replies", authMiddleware.auth, ReplyController.create);
router.get("/replies", authMiddleware.auth, ReplyController.find);

export default router;
