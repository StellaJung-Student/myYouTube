import Video from '../models/video';
import * as videoService from '../services/videoService';
import { returnNormalJson } from '../utils';

export const home = async (req, res) => {
  const videos = await Video.find();
  const data = {
    videos,
    ...res.locals,
  };
  returnNormalJson(res, data, 200);
};

export const search = async (req, res) => {
  const searchBy = req.query.term;
  const videos = await Video.find({ title: searchBy });
  const data = {
    videos,
    pageTitle: 'Search',
    searchBy,
  };
  returnNormalJson(res, data, 200);
  res.json({
    status: 'ok',
    data: {
      pageTitle: 'Search',
      searchBy,
      videos,
    },
    error: '',
  });
};
export const videos = (req, res) => res.send('Videos');
export const postUpload = async (req, res) => {
  const {
    body: { title, desc },
    file: { path },
  } = req;

  console.log(path, title, desc);
  const newVideo = await Video.create({
    fileUrl: path,
    title,
    desc,
  });

  const data = {
    pageTitle: 'Video Detail',
    videoId: newVideo._id,
  };
  returnNormalJson(res, data);
};

export const videoDetail = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const video = await videoService.getVideoById(id);
  returnNormalJson(res, { video });
};
export const videoUpdate = async (req, res) => {
  const { id } = req.params;
  console.log(req.body);
  const video = await videoService.updateVideoById(id, req.body);
  returnNormalJson(res, { video });
};

export const editVideo = (req, res) => res.send('Edit Video');
export const deleteVideo = (req, res) => res.send('Delete Video');
