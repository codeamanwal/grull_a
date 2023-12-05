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
  PostJobPage,
  BrowseFreelancersPage,
  FreelancerProfileViewByEmployerPage,
  EmployerProfilePage,
  EmployerBrowsingPostedJobsPage,
  FreelancerApplicationViewPage,
  ApplyProposalPage,
  EditProfilePage,
  AccountDetailsPage,
  FreelancerFileSharingPage,
  BillsAndPaymentsPage,
  EditCardDetailsPage,
} from './Pages';

import AuthLayout from './components/AuthLayout';
import MyJobs from './Pages/Employer/MyJobs';

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
        <Route element={<AuthLayout onlyAuthorized={false}/>}>
          {/* Only unauthorized Routes go here.*/}
          <Route path="/" element={<LandingPage isLoggedIn={false} />} />
          <Route path="/signup-option" element={<SignUpOptionPage />} />
          <Route path="/signup-enter-otp" element={<LoginSignUpModalPage otp={false} welcome={false} />} />
          <Route path="/login-request-otp" element={<LoginSignUpModalPage otp={true} welcome={true} />} />
          <Route path="/login-enter-otp" element={<LoginSignUpModalPage otp={false} welcome={true} />} />
          <Route
            path="/signup"
            element={<LoginSignUpModalPage welcome={false} />}
          />
          <Route
            path="/login"
            element={<LoginSignUpModalPage welcome={true} />}
          />
        </Route>
        <Route element={<AuthLayout onlyAuthorized={true}/>}>
          {/* Auth Protected Routes go here.*/}
          <Route path="/" element={<LandingPage isLoggedIn={true} />} />
          <Route path="/logout" element={<LandingPage logout={true} />} />
          <Route
            path="/home"
            element={
              <LandingPage
                isLoggedIn={true}
              />
            }
          />

          <Route path="/my-profile" element={<EditProfilePage />} />
          <Route path="/apply-proposal-page" element={<ApplyProposalPage />} />
          <Route path="/freelancer-in-detail" element={<FreelancerInDetail />} />
          <Route
            path="/browse-jobs-in-details"
            element={<BrowseJobInDetailsPage />}
          />
          <Route
            path="/freelancer-empty-profile"
            element={<FreelancerEmptyProfilePage />}
          />

          {/* employer pages */}
          <Route path="/post-job" element={<PostJobPage />} />
          <Route path="/freelancers" element={<BrowseFreelancersPage />} />
          <Route path="/freelancer-profile" element={<FreelancerProfileViewByEmployerPage />} />
          <Route path="/employerBrowsingPostedJobs" element={<EmployerBrowsingPostedJobsPage />} />
          <Route path="/freelancers-applications" element={<FreelancerApplicationViewPage />} />
          <Route path='/AccountDetailsPage' element={<AccountDetailsPage/>}/>
        </Route>

        <Route path="/jobs" element={<BrowseJobsPage />} />
        <Route path="/jobs-progress-status" element={<FreelancerFileSharingPage/>}/>
        <Route path = "/BillsAndPaymentsPage" element={<BillsAndPaymentsPage/>}/>
        <Route path="/EditCardDetailsPage" element={<EditCardDetailsPage/>}/>
        <Route path="/myjobs" element={<MyJobs/>}/>
      </Routes>
    </div>
  );
}

export default App;
