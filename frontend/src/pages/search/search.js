import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Video from '../../components/video';

const searchingBy = 'movie';

const Search = ({ routes }) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000${routes.videos}${routes.search}`)
      .then(res => res.json())
      .then(res => {
        console.log(res);
        setVideos(res.data.videos);
      });
  }, [routes]);
  return (
    <>
      <div className="search_header">
        <h3> Searching for: {searchingBy} </h3>
      </div>
      <div className="search_video">
        {videos &&
          videos.map(video => (
            <Video
              key={video.id}
              videoFile={video.videoFile}
              title={video.title}
              views={video.views}
            />
          ))}
      </div>
    </>
  );
};

Search.propTypes = {
  routes: PropTypes.object.isRequired,
};
export default Search;
