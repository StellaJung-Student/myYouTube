import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Header = ({ routes }) => (
  <div className="header">
    <div className="header_column">
      <i className="fab fa-youtube"></i>
    </div>
    <div className="header_colum">
      <form action={`${routes.videos}${routes.search}`} method="get">
        <input type="text" placeholder="Search by " name="term" />
      </form>
    </div>
    <div className="header_column">
      <ul>
        <li>
          <Link to="/join">Join</Link>
        </li>
        <li>
          <Link to="/login">Sign In</Link>
        </li>
      </ul>
    </div>
  </div>
);

Header.propTypes = {
  routes: PropTypes.string.isRequired,
};
export default Header;
