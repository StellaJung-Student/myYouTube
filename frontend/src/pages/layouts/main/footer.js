import React from 'react';

const Footer = () => (
  <div className="footer">
    <div className="footer_icon">
      <i className="fab fa-youtube"></i>
    </div>
    <span className="footer_text">
      YouTube {new Date().getFullYear()} &copy; Stella Jung
    </span>
  </div>
);

export default Footer;
