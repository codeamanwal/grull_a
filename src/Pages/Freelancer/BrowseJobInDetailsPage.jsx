import React from 'react';
import {BrowseJobInDetails, Footer, LoggedInHeader} from '../../components';

const BrowseJobInDetailsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A0142]">
      <LoggedInHeader
        includeNavBar={true}
        category="JOBS"
        isFreelancer={true}
      />
      <div className="flex-grow">
        <BrowseJobInDetails isFreelancer={true} />
      </div>
      <Footer />
    </div>
  );
};

export default BrowseJobInDetailsPage;
