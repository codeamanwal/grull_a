import React from 'react';
import {EmployerEmptyProfile, Footer, LoggedInHeader} from '../../components';

const EmployerEmptyProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LoggedInHeader includeNavBar={true} category="FREELANCER" isFreelancer={false} />
      <div className="flex-grow">
        <EmployerEmptyProfile />
      </div>
      <Footer />
    </div>
  );
};

export default EmployerEmptyProfilePage;
