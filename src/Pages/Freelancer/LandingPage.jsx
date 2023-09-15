/* eslint-disable */
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

import getQueryParams from "../../components/utils";


const LandingPage = () => {
  const isLoggedIn = Boolean(localStorage["access_token"]) || false;
  const queryParams = getQueryParams();
  const isFreelancer = Boolean(queryParams.get("isFreelancer"));
  const category = queryParams.get("category") || isFreelancer ? 'FREELANCER' : 'JOBS';
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
