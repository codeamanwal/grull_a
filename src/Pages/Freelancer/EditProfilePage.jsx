/* eslint-disable */
import React from 'react';
import {EditProfile, Footer, LoggedInHeader} from '../../components';
import {Link, useLocation} from 'react-router-dom';

const EditProfilePage = () => {
  const location = useLocation();
  const { firstName, lastName, description, isFreelancer } = location.state || {};
  console.log(description, "description")
  console.log(firstName, "firstName")
  console.log(lastName, "lastName")
  return (
    <div className="flex flex-col min-h-screen">
      <LoggedInHeader
        includeNavBar={true}
        category="JOBS"
        isFreelancer={true}
      />
      <div className="flex-grow">
        <EditProfile firstName={firstName} lastName={lastName} description={description} isFreelancer={true}/>
      </div>
      <Footer />
    </div>
  );
};

export default EditProfilePage;
