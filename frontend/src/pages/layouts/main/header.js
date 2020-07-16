import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header">
    <div className="header_column">
      <i className="fab fa-youtube"></i>
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

export default Header;
