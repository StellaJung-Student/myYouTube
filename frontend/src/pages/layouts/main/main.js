import React from 'react';
import PropTypes from 'prop-types';
import Header from './header';
import Footer from './footer';

const Main = ({ routes, children }) => (
  <>
    <Header routes={routes} />
    <main>{children}</main>
    <Footer />
  </>
);

Main.propTypes = {
  routes: PropTypes.object.isRequired,
  children: PropTypes.object.isRequired,
};

export default Main;
