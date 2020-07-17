export const home = (req, res) =>
  res.json({
    status: 'success',
    data: '',
    error: '',
    ...res.locals,
  });
export const search = (req, res) => {
  const searchBy = req.query.term;
  res.json({
    status: 'success',
    data: {
      pageTitle: 'Search',
      searchBy,
    },
    error: '',
  });
};
export const videos = (req, res) => res.send('Videos');
export const upload = (req, res) => res.send('Upload');
export const videoDetail = (req, res) => res.send('Video Detail');
export const editVideo = (req, res) => res.send('Edit Video');
export const deleteVideo = (req, res) => res.send('Delete Video');
