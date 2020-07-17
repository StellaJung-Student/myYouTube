import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const EditProfile = ({ id }) => (
  <div className="form_container">
    <form action={`/users/${id}`} method="post">
      <label htmlFor="avatar">Avatar</label>
      <input type="file" name="avatar" id="avatar" />
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
      <button type="submit">Update Profile</button>
    </form>
    <Link className="form_container" to="/users/changePassword">
      Change Password
    </Link>
  </div>
);

EditProfile.propTypes = {
  id: PropTypes.string.isRequired,
};

export default EditProfile;
