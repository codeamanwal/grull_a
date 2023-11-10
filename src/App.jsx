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
          <Route path="/signUpOption" element={<SignUpOptionPage />} />
          <Route path="/signUpEnterOtp" element={<LoginSignUpModalPage otp={false} welcome={false} />} />
          <Route path="/logInRequestOtp" element={<LoginSignUpModalPage otp={true} welcome={true} />} />
          <Route path="/logInEnterOtp" element={<LoginSignUpModalPage otp={false} welcome={true} />} />
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

          <Route path="/editProfile" element={<EditProfilePage />} />
          <Route path="/ApplyProposalPage" element={<ApplyProposalPage />} />
          <Route path="/freelancerInDetail" element={<FreelancerInDetail />} />
          <Route
            path="/browseJobsInDetails"
            element={<BrowseJobInDetailsPage />}
          />
          <Route
            path="/freelancerEmptyProfile"
            element={<FreelancerEmptyProfilePage />}
          />

          {/* employer pages */}
          <Route path="/postJob" element={<PostJobPage />} />
          <Route path="/browseFreelancers" element={<BrowseFreelancersPage />} />
          <Route path="/freelancerProfileViewByEmployer" element={<FreelancerProfileViewByEmployerPage />} />
          <Route path="/employerProfile" element={<EmployerProfilePage />} />
          <Route path="/employerBrowsingPostedJobs" element={<EmployerBrowsingPostedJobsPage />} />
          <Route path="/freelancerApplicationView" element={<FreelancerApplicationViewPage />} />
          <Route path='/AccountDetailsPage' element={<AccountDetailsPage/>}/>
        </Route>

        <Route path="/browseJobs" element={<BrowseJobsPage />} />
        <Route path="/freelancerFileSharingPage" element={<FreelancerFileSharingPage/>}/>
        <Route path = "/BillsAndPaymentsPage" element={<BillsAndPaymentsPage/>}/>
        <Route path="/EditCardDetailsPage" element={<EditCardDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
