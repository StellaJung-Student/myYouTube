import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Video from '../../components/video';

const VideoDetail = () => {
  const params = useParams();
  const [video, setVideo] = useState({});
  const { id } = params;
  useEffect(() => {
    fetch(`http://localhost:5000/videos/${id}`, { credentials: 'include' })
      .then(res => res.json())
      .then(res => {
        res.data.video.fileUrl =
          'http://localhost:5000/public/' +
          res.data.video.fileUrl.split('/')[2];
        setVideo(res.data.video);
      });
  }, [id]);
  return (
    <div className="video_detail">
      <div className="video_player">
        <Video videoFile={video.fileUrl} />

        <div className="video_info">
          <button>
            <Link to={`/videos/${id}/edit`}>Edit Video</Link>
          </button>
          <h4 className="video_title">{video.title} </h4>
          <h5 className="video_desc">{video.desc} </h5>
        </div>

        <span className="videoBlock_views">
          {video.views}
          {video.views === 1 ? ' view' : ' views'}
        </span>

        <div className="video_comments">
          <span className="video_comment_number">
            {video.comments && video.comments.length}
            {/* {video.comments.length === 1 ? ' comment' : ' comments'} */}2
            comments
          </span>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
