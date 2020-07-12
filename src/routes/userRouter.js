import express from 'express';
import * as userController from '../controllers/userController';
import routes from '.';

const userRouter = express.Router();

userRouter.get(routes.home, userController.user);

export default userRouter;
