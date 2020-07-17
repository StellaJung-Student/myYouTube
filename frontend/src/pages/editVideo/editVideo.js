import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EditVideo = ({ id }) => (
  <div className="form_container">
    <form action={`/videos/${id}`} method="post">
      <input type="text" name="title" placeholder="Title" />
      <textarea name="desc" placeholder="Description"></textarea>
      <button type="submit">Update Video</button>
    </form>
    <Link className="form_container" to="/videos/deleteVideo">
      Delete Video
    </Link>
  </div>
);

EditVideo.propTypes = {
  id: PropTypes.string.isRequired,
};
export default EditVideo;
