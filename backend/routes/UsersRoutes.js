import { Router } from "express"
import express from "express"
import UsersController from "../controllers/UsersController.js";
export const usersRouter = express.Router();

usersRouter.post("/register", UsersController.register);