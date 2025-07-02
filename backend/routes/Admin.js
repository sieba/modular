import express from 'express';
import AdminController from '../controllers/AdminController.js';

export const adminRouter = express.Router();

adminRouter.get('/users', AdminController.users_data)