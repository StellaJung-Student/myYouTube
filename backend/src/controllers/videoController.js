import { videos as videoData } from '../models/video';

export const home = (req, res) =>
  res.json({
    status: 'ok',
    data: '',
    error: '',
    ...res.locals,
  });

export const search = (req, res) => {
  const searchBy = req.query.term;
  res.json({
    status: 'ok',
    data: {
      pageTitle: 'Search',
      searchBy,
      videos: videoData,
    },
    error: '',
  });
};
export const videos = (req, res) => res.send('Videos');
export const upload = (req, res) => res.send('Upload');
export const videoDetail = (req, res) => res.send('Video Detail');
export const editVideo = (req, res) => res.send('Edit Video');
export const deleteVideo = (req, res) => res.send('Delete Video');
