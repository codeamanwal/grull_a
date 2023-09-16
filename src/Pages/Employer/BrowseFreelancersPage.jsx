/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {
  BrowseFreelancers,
  LoggedInHeader,
  Footer,
} from '../../components';
import BrowseFreelancerProfile from '../../components/Profile/BrowseFreelancerProfile';
import {userProfile} from '../../components/Assets';
import config from 'react-global-configuration';

const BrowseFreelancersPage = () => {

  const [freelanceData, setFreelanceData] = useState(""); // State variable to hold title

  useEffect(() => {
    handleBrowseFreelancers();
  }, []);

  const handleBrowseFreelancers = async () => {
  
    try {
      const accessToken = localStorage.getItem('access_token');
      let apiUrl = '';      
  
      apiUrl = `${config.get('BACKEND_URL')}/api/v0/freelancers?page=1&per_page=8`;
  
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('API Response:', responseData);
  
      setFreelanceData(responseData.results);
      console.log(responseData.results)
      return true;
    } catch (error) {
      console.error('Error occurred:', error);
      return false;
    }
  };  

  
  return (
    <div className="flex flex-col min-h-screen bg-[#1A0142]">
      <LoggedInHeader
        includeNavBar={true}
        category="FREELANCER"
        isFreelancer={false}
      />
      <div className="flex sm:flex-row space-y-6 flex-col space-x-6 ">
        <div className="flex flex-col sm:space-y-4 space-y-6 font-bold sm:text-2xl text-white justify-start mt-4">
          <p className="sm:pl-20 text-center text-2xl font-bold">
                        BROWSE FREELANCERS
          </p>

          <div className="p-2">
            {window.innerWidth <= 640 ? <BrowseFreelancers /> : null}
          </div>

          <div className="grid sm:grid-cols-4 sm:gap-20">
            <BrowseFreelancerProfile
              toHire={true}
              isEmployerProfile={false}
              userProfileImg={userProfile}
              userName="Chandrakanth Sharma"
              profession="Product Designer"
            />

            <BrowseFreelancerProfile
              toHire={true}
              isEmployerProfile={false}
              userProfileImg={userProfile}
              userName="Chandrakanth Sharma"
              profession="Product Designer"
            />

            <BrowseFreelancerProfile
              toHire={true}
              isEmployerProfile={false}
              userProfileImg={userProfile}
              userName="Chandrakanth Sharma"
              profession="Product Designer"
            />
          </div>
        </div>

        {window.innerWidth > 640 ? <BrowseFreelancers /> : null}
      </div>
      <Footer />
    </div>
  );
};

export default BrowseFreelancersPage;
