import express from 'express';
import * as userController from '../controllers/userController';
import routes from '.';

const userRouter = express.Router();

userRouter.get(routes.users, userController.users);
userRouter.get(routes.userDetail(), userController.userDetail);
userRouter.get(routes.editProfile, userController.editProfile);
userRouter.get(routes.changePassword, userController.changePassward);

export default userRouter;
