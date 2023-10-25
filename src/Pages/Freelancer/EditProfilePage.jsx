/* eslint-disable */
import React from 'react';
import {EditProfile, Footer, LoggedInHeader} from '../../components';
import {Link, useLocation} from 'react-router-dom';

const EditProfilePage = () => {
  
  return (
    <div className="flex flex-col min-h-screen">
      <LoggedInHeader
        includeNavBar={true}
        category="JOBS"
        isFreelancer={true}
      />
      <div className="flex-grow">
        <EditProfile />
      </div>
      <Footer />
    </div>
  );
};

export default EditProfilePage;
