import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

const EditVideo = () => {
  const params = useParams();
  const history = useHistory();
  const { id } = params;
  const [video, setVideo] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/videos/${id}`, { credentials: 'include' })
      .then(res => res.json())
      .then(res => setVideo(res.data.video));
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    setVideo({
      ...video,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    fetch(`http://localhost:5000/videos/${id}`, {
      method: 'post',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'content-Type': 'application/json',
      },
      body: JSON.stringify(video),
    })
      .then(res => res.json())
      .then(res => {
        if (res.status === 'ok') {
          history.push(`/videos/${id}`);
        }
      });
  };
  return (
    <div className="form_container">
      <form onSubmit={handleSubmit} method="post">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={video.title}
          onChange={handleChange}
        />
        <textarea
          name="desc"
          placeholder="Description"
          value={video.desc}
          onChange={handleChange}
        ></textarea>
        <button type="submit">Update Video</button>
      </form>
      <Link className="form_container" to="/videos/deleteVideo">
        Delete Video
      </Link>
    </div>
  );
};

export default EditVideo;
