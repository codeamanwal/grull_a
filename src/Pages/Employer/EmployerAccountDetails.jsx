import React from 'react';
import {Footer, LoggedInHeader, MyAccount} from '../../components';

const EmployerAccountDetails = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <LoggedInHeader includeNavBar={true} category="FREELANCER" isFreelancer={false} />
        <MyAccount />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerAccountDetails;
