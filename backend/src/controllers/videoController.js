import Video from '../models/video';

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
export const postUpload = (req, res) => {
  const {
    body: { file, title, desc },
  } = req;

  console.log(file, title, desc);

  const videoId = 324393;
  res.json({
    status: 'ok',
    data: {
      pageTitle: 'Video Detail',
      videoId,
    },
    error: '',
  });
};

export const videoDetail = (req, res) => res.send('Video Detail');
export const editVideo = (req, res) => res.send('Edit Video');
export const deleteVideo = (req, res) => res.send('Delete Video');
