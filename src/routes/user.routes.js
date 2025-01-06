import { Router } from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../controllers/user.contoller.js";
import { upload } from "../middlewares/multer.middelware.js";
import verifyJWT from "../middlewares/auth.middelware.js";
const router = Router();
router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
    {
      name: "coverImage",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);

// secure routs
router.route("/logout").post(verifyJWT, logoutUser);
export default router;
router.route("/refresh-token").post(refreshAccessToken);
