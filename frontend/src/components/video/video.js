import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoFile }) => {
  const [isControl, setControl] = useState(false);

  const handleMouseOver = () => {
    setControl(true);
  };

  const handleMouseOut = () => {
    setControl(false);
  };

  console.log(videoFile);

  return (
    <video
      className="videoBlock_thumbnail"
      src={videoFile}
      controls={isControl}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    />
  );
};

Video.propTypes = {
  videoFile: PropTypes.string.isRequired,
};

export default Video;
