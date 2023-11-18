import React, {useState} from 'react';
import {LoggedInHeader, Footer} from '../../components';
import ReviewCard from '../../components/Profile/ReviewCard';
import EditProfileCard from '../../components/Profile/EditProfileCard';
import ProfileDetails from '../../components/Profile/ProfileDetails';
import config from 'react-global-configuration';
import AuthService from '../../Services/AuthService';
import {useLocation} from 'react-router-dom';

const FreelancerProfileViewByEmployerPage = () => {
  const [successMessage, setSuccessMessage] = useState(''); // Track success message
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Track popup visibility
  const accessToken = AuthService.getToken();
  const location = useLocation();
  const dummydata = location?.state?.userProfile?.employee||[];
  const handleHireClick = () => {
    const id = localStorage.getItem('job_id');
    // Construct the URL for the API endpoint
    const apiUrl = `${config.get('BACKEND_URL')}/api/v0/freelancers/${id}/hire`;

    // Make a POST request to accept the application
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      // Add any request body data if required
      // body: JSON.stringify({}),
    })
        .then((response) => {
          if (response.success) {
          // Handle success
            console.log('Hired successfully');
            setIsHiring(true); // Set a state variable to indicate the hiring action
            setSuccessMessage('Hired successfully'); // Set success message
          } else {
          // Handle error
            console.error('Failed to Hire');
            setSuccessMessage('Failed to Hire'); // Set error message
          }
          setIsPopupVisible(true); // Show the popup whether it's success or error
        })
        .catch((error) => {
        // Handle network error
          console.error('Network error:', error);
          setSuccessMessage('Network error'); // Set error message
          setIsPopupVisible(true); // Show the popup for network errors
        });
  };

  const acceptApplication = () => {
    const id = localStorage.getItem('job_id');
    // Construct the URL for the API endpoint
    const apiUrl = `${config.get('BACKEND_URL')}/api/v0/applications/${id}/accept`;

    // Make a POST request to accept the application
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      // Add any request body data if required
      // body: JSON.stringify({}),
    })
        .then((response) => {
          if (response.success) {
          // Handle success
            console.log('Application accepted successfully');
            setIsHiring(true); // Set a state variable to indicate the hiring action
            setSuccessMessage('Application accepted successfully'); // Set success message
          } else {
          // Handle error
            console.error('Failed to accept application');
            setSuccessMessage('Failed to accept application'); // Set error message
          }
          setIsPopupVisible(true); // Show the popup whether it's success or error
        })
        .catch((error) => {
        // Handle network error
          console.error('Network error:', error);
          setSuccessMessage('Network error'); // Set error message
          setIsPopupVisible(true); // Show the popup for network errors
        });
  };

  const rejectApplication = () => {
    const id = localStorage.getItem('job_id');


    // Construct the URL for the API endpoint
    const apiUrl = `${config.get('BACKEND_URL')}/api/v0/applications/${id}/reject`;

    // Make a POST request to accept the application
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      // Add any request body data if required
      // body: JSON.stringify({}),
    })
        .then((response) => {
          if (response.ok) {
          // Handle success
            console.log('Application rejected successfully');
            setIsHiring(true); // Set a state variable to indicate the hiring action
            setSuccessMessage('Application rejected successfully'); // Set success message
          } else {
          // Handle error
            console.error('Failed to reject application');
            setSuccessMessage('Failed to reject application'); // Set error message
          }
          setIsPopupVisible(true); // Show the popup whether it's success or error
        })
        .catch((error) => {
        // Handle network error
          console.error('Network error:', error);
          setSuccessMessage('Network error'); // Set error message
          setIsPopupVisible(true); // Show the popup for network errors
        });
  };

  const cancelApplication = () => {
    const id = localStorage.getItem('job_id');


    // Construct the URL for the API endpoint
    const apiUrl = `${config.get('BACKEND_URL')}/api/v0/applications/${id}/cancel`;

    // Make a POST request to accept the application
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      // Add any request body data if required
      // body: JSON.stringify({}),
    })
        .then((response) => {
          if (response.ok) {
          // Handle success
            console.log('Application rejected successfully');
            setIsHiring(true); // Set a state variable to indicate the hiring action
            setSuccessMessage('Application rejected successfully'); // Set success message
          } else {
          // Handle error
            console.error('Failed to reject application');
            setSuccessMessage('Failed to cancel application'); // Set error message
          }
          setIsPopupVisible(true); // Show the popup whether it's success or error
        })
        .catch((error) => {
        // Handle network error
          console.error('Network error:', error);
          setSuccessMessage('Network error'); // Set error message
          setIsPopupVisible(true); // Show the popup for network errors
        });
  };
  return (
    <div className="bg-[#1A0142] flex flex-col min-h-screen">
      <LoggedInHeader includeNavBar={true} category="FREELANCER" isFreelancer={false} />
      <div className="flex-grow">
        <div className="flex flex-col md:flex-row justify-center md:space-x-20 bg-[#1A0142] 2xl:h-[913px] pt-10">
          <EditProfileCard
            meData={dummydata}
            isEmployerProfile={false}
          />
          <ProfileDetails meData={dummydata} employerViewProfile={true} description="Looking for freelancers for more than a year of experience" />

          <div className="flex flex-col items-center  sm:space-y-10 text-white space-x-4 pt-8">
            <div className="flex flex-col space-y-4 md:pt-8 font-spaceGrotesk font-semibold text-xl">
              <button className="md:px-8 py-4 px-1 rounded shadow bg-gradient-to-l from-purple-400 to-transparent" onClick={handleHireClick}>
                HIRE
              </button>
              <button className="text-purple-600 text-base font-spaceGrotesk font-medium pt-4" onClick={acceptApplication}>
                Accept Application
              </button>
              <button className="text-purple-600 text-base font-spaceGrotesk font-medium" onClick={rejectApplication}>
                Reject Application
              </button>

              {/* Conditionally render the popup */}
              {isPopupVisible && (
                <div id="Popup" className="popup" style={{zIndex: 7}}>
                  <div
                    className="popup-content bg-purple-500"
                    style={{
                      color: 'white',
                      padding: '20px',
                      textAlign: 'center',
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      width: '300px',
                      transition: 'opacity 0.3s, transform 0.3s',
                      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                      border: '1px solid black',
                    }}>
                    {successMessage === 'Failed to reject application' ? (
                      <p className="mt-2 fw-bolder" style={{color: 'white'}}>
                        {successMessage}
                      </p>
                    ) : (
                      <p className="mt-2 fw-bolder">{successMessage}</p>
                    )}
                    <button
                      className="close-popup"
                      style={{position: 'absolute', top: '10px', right: '10px', cursor: 'pointer', background: 'none', border: 'none', color: 'black', fontSize: '20px'}}
                      onClick={() => setIsPopupVisible(false)}>
                      {' '}
                      &times;
                    </button>
                  </div>
                  <div className="popup-backdrop" style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, backdropFilter: 'blur(5px)'}}></div>
                </div>
              )}

              <button className="text-purple-600 text-base font-spaceGrotesk font-medium " onClick={cancelApplication}>
                Cancel Application
              </button>
              {/* <p className="text-purple-600 text-base font-spaceGrotesk font-medium pt-4">
              SEND AN OFFER
                      </p> */}
            </div>

            <div className="p-6">
              <div className="flex flex-col space-y-2 space-x-2 rounded-lg border border-white w-full md:w-[300px]">
                <p className="text-center rounded-t-lg w-full h-10 bg-purple-600 text-24 font-spaceGrotesk font-semibold pt-2">REVIEWS</p>
                <div className="flex flex-col  items-center">
                  <ReviewCard rating={2} />
                  <div className="border border-gray-300  w-3/4 flex items-center"></div>
                </div>

                <div className="flex flex-col  items-center">
                  <ReviewCard rating={3} />
                  <div className="border border-gray-300  w-3/4 flex items-center"></div>
                </div>

                <div className="flex flex-col  items-center">
                  <ReviewCard rating={3} />
                  <div className="border border-gray-300  w-3/4 flex items-center"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FreelancerProfileViewByEmployerPage;
