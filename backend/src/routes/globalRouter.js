import express from 'express';
import * as videoController from '../controllers/videoController';
import * as userController from '../controllers/userController';
import routes from '.';
import { passportAuth } from '../middlewares/passport/auth';

const globalRouter = express.Router();

globalRouter.get(routes.check, userController.check);
globalRouter.get(routes.home, videoController.home);
globalRouter.get(routes.search, videoController.search);
globalRouter.post(
  routes.join,
  userController.postJoin,
  passportAuth,
  userController.afterlogin,
  userController.check,
);
globalRouter.post(
  routes.login,
  passportAuth,
  userController.afterlogin,
  userController.check,
);
globalRouter.get(routes.logout, userController.logout);
globalRouter.get(routes.redirectSuccess, userController.redirectSuccess);

export default globalRouter;
