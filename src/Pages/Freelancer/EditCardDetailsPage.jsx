import React from 'react';
import {EditCardDetails, Footer, LoggedInHeader} from '../../components';

const EditCardDetailsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A0142]">
      <LoggedInHeader
        includeNavBar={true}
        category="JOBS"
        isFreelancer={true}
      />
      <div className="flex-grow overflow-y-hidden py-3">
        <EditCardDetails />
      </div>
      <Footer />
    </div>
  );
};

export default EditCardDetailsPage;
