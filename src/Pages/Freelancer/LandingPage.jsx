/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {Link, useLocation} from 'react-router-dom';
import {
  LoginSignUpHeader,
  LoggedInHeader,
  Footer,
  Hero,
  WhyGrull,
  ExploreCategories,
} from '../../components';

const LandingPage = ({isLoggedIn}) => {
  const location = useLocation();
  const state = location.state || {};
  const { isFreelancer, category } = state;

  console.log('isFreelancer:', isFreelancer);
  console.log('category:', category);
  return (
    <div>
      {isLoggedIn ? (
                <LoggedInHeader
                  includeNavBar={true}
                  isFreelancer={isFreelancer}
                  category={category}
                />
            ) : (
                <LoginSignUpHeader />
            )}

      <Hero />
      <ExploreCategories />
      <WhyGrull />
      <Footer />
    </div>
  );
};

LandingPage.propTypes = {
  isLoggedIn: PropTypes.bool,
  category: PropTypes.string,
  isFreelancer: PropTypes.bool,
};

export default LandingPage;
