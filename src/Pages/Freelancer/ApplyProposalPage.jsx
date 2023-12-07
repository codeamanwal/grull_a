/* eslint-disable */
import React from 'react';
import {Footer, FreelanceApplication, LoggedInHeader} from '../../components';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocale } from 'antd/es/locale';

const ApplyProposalPage = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <LoggedInHeader
          includeNavBar={true}
          category="JOBS"
          isFreelancer={true}
        />
        <FreelanceApplication job={location.state}/>
      </div>
      <Footer />
    </div>
  );
};

export default ApplyProposalPage;
