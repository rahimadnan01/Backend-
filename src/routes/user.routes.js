import { Router } from "express";
import {registerUser} from "../"
const router = Router();
router.route("/register", registerUser);
export default router;
