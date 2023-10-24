/* eslint-disable */
import React from 'react';
import {Route, Routes} from 'react-router-dom';
import createSettings from './utils/settings';
import './index.css';
import FreelancerInDetail from './Pages/Employer/FreelancerInDetail';
import {
  LandingPage,
  SignUpOptionPage,
  LoginSignUpModalPage,
  BrowseJobsPage,
  BrowseJobInDetailsPage,
  FreelancerEmptyProfilePage,
  EmployerEmptyProfilePage,
  PostJobPage,
  BrowseFreelancersPage,
  FreelancerProfileViewByEmployerPage,
  EmployerProfilePage,
  EmployerBrowsingPostedJobsPage,
  FreelancerApplicationViewPage,
  ApplyProposalPage,
  EditProfilePage,
  FreelancerFileSharingPage,
  AccountDetailsPage,
  EditMyAccountPage,
  CardDetailsPage,
  EditCardDetailsPage,
  BillsAndPaymentsPage,
  EmployerAccountDetails
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
          path="/LoggedInPage"
          element={
            <LandingPage
              isLoggedIn={true}
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
        <Route path="/editProfile" element={<EditProfilePage />} />
        <Route path="/ApplyProposalPage" element={<ApplyProposalPage />} />
        <Route path="/freelancerInDetail" element={<FreelancerInDetail />} />
        <Route path="/FreelancerFileSharingPage" element={<FreelancerFileSharingPage />} />
        <Route path="/AccountDetailsPage" element={<AccountDetailsPage />} />
        <Route path="/employerAccountDetails" element={<EmployerAccountDetails />} />
        <Route path="/EditMyAccountPage" element={<EditMyAccountPage />} />
        <Route path="/CardDetailsPage" element={<CardDetailsPage />} />
        <Route path="/EditCardDetailsPage" element={<EditCardDetailsPage />} />
        <Route path="/BillsAndPaymentsPage" element={<BillsAndPaymentsPage />} />

        <Route
          path="/browseJobsInDetails"
          element={<BrowseJobInDetailsPage />}
        />
  

        <Route
          path="/freelancerEmptyProfile"
          element={<FreelancerEmptyProfilePage />}
        />
        <Route
          path="/employerEmptyProfile"
          element={<EmployerEmptyProfilePage />}
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
