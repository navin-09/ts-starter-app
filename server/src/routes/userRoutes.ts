// routes/customerRoutes.ts
import express from "express";
import { signUpUser, signInUser } from "../controllers/UserController";
const router = express.Router();

router.post("/signup", signUpUser); // Route for signup
router.post("/signin", signInUser); // Route for signin

export default router;
