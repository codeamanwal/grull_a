import React from 'react';
import {Route, Routes} from 'react-router-dom';
import './index.css';

import {
  LandingPage,
  SignUpOptionPage,
  LoginSignUpModalPage,
  BrowseJobsPage,
  BrowseJobInDetailsPage,
  EditProfilePage,
  FreelancerEmptyProfilePage,
  ApplyProposalPage,
  EditMyAccountPage,
  BillsAndPaymentsPage,
  CardDetailsPage,
  EditCardDetailsPage,
  AccountDetailsPage,
  FreelancerFileSharingPage,
  PostJobPage,
  BrowseFreelancersPage,
  FreelancerProfileViewByEmployerPage,
  EmployerProfilePage,
  EmployerBrowsingPostedJobsPage,
  FreelancerApplicationViewPage,
  ProjectGalleryPage,
} from './Pages';

import config from 'react-global-configuration';
import {env} from 'process';

function createSettings() {
  config.set('BACKEND_ENDPOINT', env.BACKEND_ENDPOINT);
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
        <Route
          path="/signUpEnterOtp"
          element={<LoginSignUpModalPage otp={false} welcome={false} />}
        />
        <Route
          path="/logInRequestOtp"
          element={<LoginSignUpModalPage otp={true} welcome={true} />}
        />
        <Route
          path="/logInEnterOtp"
          element={<LoginSignUpModalPage otp={false} welcome={true} />}
        />

        <Route path="/browseJobs" element={<BrowseJobsPage />} />

        <Route
          path="/browseJobsInDetails"
          element={<BrowseJobInDetailsPage />}
        />
        <Route
          path="/freelancerEmptyProfile"
          element={<FreelancerEmptyProfilePage />}
        />

        <Route path="/freelancerEditProfile" element={<EditProfilePage />} />
        <Route path="/applyProposal" element={<ApplyProposalPage />} />
        <Route path="/accountDetails" element={<AccountDetailsPage />} />
        <Route path="/editMyAccount" element={<EditMyAccountPage />} />
        <Route path="/billsAndPayments" element={<BillsAndPaymentsPage />} />
        <Route path="/cardDetails" element={<CardDetailsPage />} />
        <Route path="/editCardDetais" element={<EditCardDetailsPage />} />

        <Route
          path="/freelancerFileSharing"
          element={<FreelancerFileSharingPage />}
        />
        <Route
          path="/freelancerProjectGallery"
          element={<ProjectGalleryPage />}
        />

        {/* employer pages */}
        <Route path="/postJob" element={<PostJobPage />} />
        <Route path="/browseFreelancers" element={<BrowseFreelancersPage />} />
        <Route
          path="/freelancerProfileViewByEmployer"
          element={<FreelancerProfileViewByEmployerPage />}
        />
        <Route path="/employerProfile" element={<EmployerProfilePage />} />
        <Route
          path="/employerBrowsingPostedJobs"
          element={<EmployerBrowsingPostedJobsPage />}
        />
        <Route
          path="/freelancerApplicationView"
          element={<FreelancerApplicationViewPage />}
        />
      </Routes>
    </div>
  );
}

export default App;
