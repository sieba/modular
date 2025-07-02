import express from 'express';
import LoginController from '../controllers/LoginController.js';
export const loginRouter = express.Router();

loginRouter.post("/login", LoginController.login)