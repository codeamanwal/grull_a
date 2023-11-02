/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {useLocation} from 'react-router-dom';
import {
  LoginSignUpHeader,
  LoggedInHeader,
  Footer,
  Hero,
  WhyGrull,
  ExploreCategories,
} from '../../components';
import AuthService from '../../Services/AuthService';

const LandingPage = ({isLoggedIn, logout = false}) => {
  const location = useLocation();
  const state = location.state || {};

  let { isFreelancer, category } = state;

  if (logout) {
    isLoggedIn = false;
    AuthService.logout();
  }

  return (
    <div>
      {isLoggedIn ? 
      <LoggedInHeader
        includeNavBar={true}
        isFreelancer={isFreelancer}
        category={category}
      />: <LoginSignUpHeader/>}
      <Hero />
      <ExploreCategories />
      <WhyGrull />
      <Footer />
    </div>
  )
};

LandingPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  category: PropTypes.string,
  isFreelancer: PropTypes.bool,
};

export default LandingPage;
