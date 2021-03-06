import express from 'express';
import * as videoController from '../controllers/videoController';
import routes from '.';
import { uploadVideo } from '../middlewares/localMiddleware';

const videoRouter = express.Router();

videoRouter.get(routes.search, videoController.search);
videoRouter.get(routes.videos, videoController.videos);
videoRouter.post(routes.upload, uploadVideo, videoController.postUpload);
videoRouter.get(routes.videoDetail, videoController.videoDetail);
videoRouter.post(routes.videoDetail, videoController.videoUpdate);
videoRouter.get(routes.editVideo, videoController.editVideo);
videoRouter.get(routes.deleteVideo, videoController.deleteVideo);

export default videoRouter;
