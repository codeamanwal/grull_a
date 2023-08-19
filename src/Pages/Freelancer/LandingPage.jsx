import React from 'react';
import PropTypes from 'prop-types';
import {
  LoginSignUpHeader,
  LoggedInHeader,
  Footer,
  Hero,
  WhyGrull,
  ExploreCategories,
} from '../../components';

const LandingPage = ({isLoggedIn, category, isFreelancer}) => {
  return (
    <div>
      {isLoggedIn ? (
                <LoggedInHeader
                  includeNavBar={true}
                  category={category}
                  isFreelancer={isFreelancer}
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
