import React, {useState} from 'react';
import PropTypes from 'prop-types';
import config from 'react-global-configuration';

const ProfileViewCard = ({userProfileImg, userName}) => {
  const [successMessage, setSuccessMessage] = useState(''); // Track success message
  const [isPopupVisible, setIsPopupVisible] = useState(false); // Track popup visibility

  const confirmSalaryNegotiation = () => {
    const id = localStorage.getItem('job_id');
    const accessToken = localStorage.getItem('access_token');

    // Construct the URL for the API endpoint
    const apiUrl = `${config.get('BACKEND_URL')}/api/v0/applications/${id}/confirm-negotiation`;

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
    <div className="flex sm:px-6 sm:py-3 px-2  text-white">
      <div className="flex flex-col items-center space-y-2 xl:space-y-6 bg-[#482773] rounded-lg lg:mt-0 xl:p-10 m-4 py-3">
        <img className="rounded-full sm:h-72 sm:w-72 w-36 h-36 p-2" src={userProfileImg} alt="author avatar" />
        <div className="text-center font-bold sm:text-2xl text-xl font-spaceGrotesk">{userName}</div>
        <div className="sm:text-xl text-base font-GeneralSans font-normal">30USD/Per Hour</div>
        <div className=" text-base text-center font-GeneralSans font-normal">
          I have had an inclination towards art and design since childhood and have grown to have a high level of liking and skill set to nurture this talent. A sense of aesthetics always came
          naturally to me
        </div>

        <div className="flex flex-col space-y-6">
          <p className="text-[#b27ee3] text-xl font-normal">VIEW SAMPLE WORK</p>
          <button className="text-white text-center text-xl font-medium rounded shadow bg-gradient-to-l from-purple-400 to-transparent py-2 w-full " onClick={confirmSalaryNegotiation}>
            MESSAGE
          </button>
        </div>
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
      </div>
    </div>
  );
};

ProfileViewCard.propTypes = {
  userProfileImg: PropTypes.string,
  userName: PropTypes.string,
};

export default ProfileViewCard;
