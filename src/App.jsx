/* eslint-disable */
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import createSettings from './utils/settings';
import './index.css';

import {
  LandingPage,
  SignUpOptionPage,
  LoginSignUpModalPage,
  BrowseJobsPage,
  BrowseJobInDetailsPage,
  FreelancerEmptyProfilePage,
  PostJobPage,
  BrowseFreelancersPage,
  FreelancerProfileViewByEmployerPage,
  EmployerProfilePage,
  EmployerBrowsingPostedJobsPage,
  FreelancerApplicationViewPage,
  ApplyProposalPage 
} from './Pages';

import {LogIn} from './components';

function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function App() {
  createSettings();
  return (
    <div className=" overflow-hidden">
      <Routes>
        <Route path="/" element={<LandingPage isLoggedIn={false} />} />
        <Route
          path="/freelancerLoggedInPage"
          element={
            <LandingPage
              isLoggedIn={true}
              category="JOBS"
              isFreelancer={true}
            />
          }
        />
        <Route
          path="/employerLoggedInPage"
          element={
            <LandingPage
              isLoggedIn={true}
              category="FREELANCERS"
              isFreelancer={false}
            />
          }
        />
        <Route path="/signUpOption" element={<SignUpOptionPage />} />
        <Route path="/signUpEnterOtp" element={<LoginSignUpModalPage otp={false} welcome={false} />} />
        <Route path="/logInRequestOtp" element={<LoginSignUpModalPage otp={true} welcome={true} />} />
        <Route path="/logInEnterOtp" element={<LoginSignUpModalPage otp={false} welcome={true} />} />

        <Route path="/browseJobs" element={<BrowseJobsPage />} />

        <Route path="/ApplyProposalPage" element={<ApplyProposalPage />} />

        <Route
          path="/browseJobsInDetails"
          element={<BrowseJobInDetailsPage />}
        />
  

        <Route
          path="/freelancerEmptyProfile"
          element={<FreelancerEmptyProfilePage />}
        />
        <Route
          path="/signup"
          element={<LoginSignUpModalPage welcome={false} />}
        />
        <Route
          path="/login"
          element={<LoginSignUpModalPage welcome={true} />}
        />

        {/* employer pages */}
        <Route path="/postJob" element={<PostJobPage />} />
        <Route path="/browseFreelancers" element={<BrowseFreelancersPage />} />
        <Route path="/freelancerProfileViewByEmployer" element={<FreelancerProfileViewByEmployerPage />} />
        <Route path="/employerProfile" element={<EmployerProfilePage />} />
        <Route path="/employerBrowsingPostedJobs" element={<EmployerBrowsingPostedJobsPage />} />
        <Route path="/freelancerApplicationView" element={<FreelancerApplicationViewPage />} />
      </Routes>
    </div>
  );
}

export default App;
