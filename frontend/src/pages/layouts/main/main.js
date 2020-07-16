import React from 'react';
import PropTypes from 'prop-types';

const Main = ({ children }) => (
  <>
    <header>
      <h1>Youtube</h1>
    </header>
    <main>{children}</main>
    <footer>
      <span>&copy; Stella Jung</span>
    </footer>
  </>
);

Main.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Main;
