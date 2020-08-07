import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ isAuth, id = '123' }) => {
  console.log('header-isauth:', isAuth);
  return (
    <div className="header">
      <div className="header_wrapper">
        <div className="header_column">
          <Link to="/">
            <i className="fab fa-youtube"></i>
          </Link>
        </div>
        <div className="header_colum">
          <form>
            <input type="text" placeholder="Search by " name="term" />
          </form>
        </div>
        <div className="header_column">
          <ul>
            {isAuth ? (
              <>
                <li>
                  <Link to="/videos/upload">Upload</Link>
                </li>
                <li>
                  <Link to={`/users/${id}`}>Profile</Link>
                </li>
                <li>
                  <Link to={`/logout`}>Sign Out</Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link to="/join">Join</Link>
                </li>
                <li>
                  <Link to="/login">Sign In</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  id: PropTypes.string,
};
export default Header;
