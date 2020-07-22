import Video from '../models/video';
import { returnNormalJson } from '../utils';

export const home = async (req, res) => {
  const videos = await Video.find();
  res.json({
    status: 'ok',
    data: { videos },
    error: '',
    ...res.locals,
  });
};

export const search = async (req, res) => {
  const searchBy = req.query.term;
  const videos = await Video.find({ title: searchBy });
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

export const videoDetail = (req, res) => res.send('Video Detail');
export const editVideo = (req, res) => res.send('Edit Video');
export const deleteVideo = (req, res) => res.send('Delete Video');
