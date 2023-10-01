/* eslint-disable */

import React, {useState} from 'react';
import {LoggedInHeader, BrowseJobInDetails, Footer} from '../../components';
import {Link, useLocation} from 'react-router-dom';

const EmployerBrowsingPostedJobsPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { jobs} = location.state || {};
console.log(jobs, "EmployerBrowsingPostedJobsPage");

  return (
    <div className="bg-[#1A0142] min-h-screen flex flex-col">
      <LoggedInHeader
        includeNavBar={true}
        category="FREELANCER"
        isFreelancer={false}
      />
      <div className="flex-grow flex">
        <BrowseJobInDetails
          isFreelancer={false}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          className="flex-grow"
          jobs={jobs}
        />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerBrowsingPostedJobsPage;
