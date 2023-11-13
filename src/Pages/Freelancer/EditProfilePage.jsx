/* eslint-disable */
import React, {useState} from 'react';
import AuthService from '../../Services/AuthService';
import {EditProfile, Footer, LoggedInHeader} from '../../components';
import {Link, useLocation} from 'react-router-dom';

const EditProfilePage = () => {
  const [userMode, setUserMode] = useState(AuthService.getUserMode());
  return (
    <div className="flex flex-col min-h-screen">
      <LoggedInHeader
        includeNavBar={true}
        category="JOBS"
        isFreelancer={true}
      />
      <div className="flex-grow">
        <EditProfile userMode={userMode} setUserMode={setUserMode}/>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfilePage;
