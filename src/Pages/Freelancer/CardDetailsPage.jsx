import React from 'react';
import {CardDetails, Footer, LoggedInHeader} from '../../components';

const CardDetailsPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A0142]">
      <LoggedInHeader
        includeNavBar={true}
        category="JOBS"
        isFreelancer={true}
      />
      <div className="flex-grow py-2">
        <CardDetails />
      </div>
      <Footer />
    </div>
  );
};

export default CardDetailsPage;
