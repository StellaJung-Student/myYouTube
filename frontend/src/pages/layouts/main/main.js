import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const Main = ({ isAuth, children }) => (
  <>
    <Header isAuth={isAuth} />
    <main>{children}</main>
    <Footer />
  </>
);

Main.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  children: PropTypes.object.isRequired,
};

export default Main;
