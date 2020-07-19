import express from 'express';
import * as videoController from '../controllers/videoController';
import * as userController from '../controllers/userController';
import routes from '.';

const globalRouter = express.Router();

globalRouter.get(routes.home, videoController.home);
globalRouter.get(routes.search, videoController.search);
globalRouter.post(routes.join, userController.postJoin);
globalRouter.post(routes.login, userController.postlogin);
globalRouter.get(routes.logout, userController.logout);

export default globalRouter;
