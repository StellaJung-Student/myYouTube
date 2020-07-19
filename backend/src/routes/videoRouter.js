import express from 'express';
import * as videoController from '../controllers/videoController';
import routes from '.';

const videoRouter = express.Router();

videoRouter.get(routes.search, videoController.search);
videoRouter.get(routes.videos, videoController.videos);
videoRouter.post(routes.upload, videoController.postUpload);
videoRouter.get(routes.videoDetail(), videoController.videoDetail);
videoRouter.get(routes.editVideo, videoController.editVideo);
videoRouter.get(routes.deleteVideo, videoController.deleteVideo);

export default videoRouter;
