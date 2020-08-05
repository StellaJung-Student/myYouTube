import React from 'react';
// import { videos } from './data';
import PropTypes from 'prop-types';
import Video from '../../components/video';

const Home = ({ videos = [] }) => (
  <div className="home_videos">
    {videos.map(video => (
      <Video
        key={video.id}
        id={video.id}
        videoFile={video.videoFile}
        title={video.title}
        views={video.views}
      />
    ))}
  </div>
);

Home.propTypes = {
  videos: PropTypes.array,
};
export default Home;
