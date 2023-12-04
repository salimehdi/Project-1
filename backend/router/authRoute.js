

import express from "express";
const authRouter = express.Router();
import jwtAuth from "../middleware/jwtAuth.js";

import {signUp , signIn , getUser } from "../controller/authController.js";

authRouter.post("/signup", signUp);
authRouter.post("/signin", signIn);
authRouter.get("/user", jwtAuth, getUser);

export default authRouter;
