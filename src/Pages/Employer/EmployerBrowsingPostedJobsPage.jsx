/* eslint-disable */

import React, {useState} from 'react';
import {LoggedInHeader, BrowseJobInDetails, Footer} from '../../components';

const EmployerBrowsingPostedJobsPage = () => {
  const [isOpen, setIsOpen] = useState(false);

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
        />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerBrowsingPostedJobsPage;
