import express from 'express';
import * as videoController from '../controllers/videoController';
import routes from '.';

const videoRouter = express.Router();

videoRouter.get(routes.home, videoController.video);

export default videoRouter;
