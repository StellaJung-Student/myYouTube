import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ isAuthenticated = true }) => {
  return (
    <div className="header">
      <div className="header_column">
        <i className="fab fa-youtube"></i>
      </div>
      <div className="header_colum">
        <form>
          <input type="text" placeholder="Search by " name="term" />
        </form>
      </div>
      <div className="header_column">
        <ul>
          {isAuthenticated ? (
            <>
              <li>
                <Link to="/videos/upload">Upload</Link>
              </li>
              <li>
                <Link to="/users/:id">Profile</Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/join">Join</Link>
              </li>
              <li>
                <Link to="/signIn">Sign In</Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool,
};
export default Header;
