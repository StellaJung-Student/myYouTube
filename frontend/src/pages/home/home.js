import React, { useEffect, useState } from 'react';
import VideoDesc from '../../components/videoDesc';

const Home = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    fetch('http://localhost:5000', { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        console.log(res.data.videos);
        const videoFiles = res.data.videos.map(e => {
          const fileURL =
            'http://localhost:5000/public/' + e.fileUrl.split('/')[2];
          return { ...e, fileURL };
        });
        setVideos(videoFiles);
      });
  }, []);

  console.log(videos);
  return (
    <div className="home_videos">
      {videos.map(video => (
        <VideoDesc
          key={video._id}
          id={video._id}
          videoFile={video.fileURL}
          title={video.title}
          views={video.views}
        />
      ))}
    </div>
  );
};
export default Home;
