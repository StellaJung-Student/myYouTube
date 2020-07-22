import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const Main = ({ children }) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

Main.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Main;
