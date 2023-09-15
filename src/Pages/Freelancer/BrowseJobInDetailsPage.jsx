/* eslint-disable */
import React from 'react';
import {BrowseJobInDetails, Footer, LoggedInHeader} from '../../components';
import {Link, useLocation} from 'react-router-dom';

const BrowseJobInDetailsPage = () => {
  const location = useLocation();
  const { jobData } = location.state || {}; // Access jobData from location state

  console.log("jobData in BrowseJobsInDetailsPage:", jobData);
  return (
    <div className="flex flex-col min-h-screen bg-[#1A0142]">
      <LoggedInHeader
        includeNavBar={true}
        category="JOBS"
        isFreelancer={true}
      />
      <div className="flex-grow">
        <BrowseJobInDetails isFreelancer={true} jobData={jobData} />
      </div>
      <Footer />
    </div>
  );
};

export default BrowseJobInDetailsPage;
