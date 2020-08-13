import Video from '../models/video';

export const getVideoById = id => {
  return Video.findById(id);
};

export const updateVideoById = (id, video) => {
  return Video.findByIdAndUpdate(id, video);
};
