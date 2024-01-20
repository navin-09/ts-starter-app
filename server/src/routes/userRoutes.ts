// routes/customerRoutes.ts
import express from "express";
import { signUpUser, signInUser } from "../controllers/UserController";

const router = express.Router();

router.route("/auth").post(signUpUser).post(signInUser);

export default router;
