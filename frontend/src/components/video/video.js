import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ id, videoFile, title, views }) => (
  <div className="videoBlock">
    <a href={`/videos/${id}`}>
      <video className="videoBlock_thumbnail" src={videoFile} controls={true} />
      <h4 className="videoBlock_title">{title} </h4>
      <h6 className="videoBlcok_views">
        {views}
        {views === 1 ? ' view' : ' views'}
      </h6>
    </a>
  </div>
);

Video.propTypes = {
  id: PropTypes.number.isRequired,
  videoFile: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
};

export default Video;
