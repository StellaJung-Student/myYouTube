import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ id = '123' }) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    fetch('http://localhost:5000/')
      .then(res => res.json())
      .then(res => {
        setAuthenticated(res.data.isAuthenticated);
      });
  }, []);
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
            {isAuthenticated ? (
              <>
                <li>
                  <Link to="/videos/upload">Upload</Link>
                </li>
                <li>
                  <Link to={`/users/${id}`}>Profile</Link>
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
  id: PropTypes.string,
};
export default Header;
