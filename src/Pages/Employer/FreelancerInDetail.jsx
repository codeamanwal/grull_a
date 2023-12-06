/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import ProfileDetails from "../../components/Profile/ProfileDetails";
import ReviewCard from "../../components/Profile/ReviewCard";
import { userProfile } from "../../components/Assets";
import config from "react-global-configuration";

const FreelancerInDetail = ({ firstName, lastName, description, toHire }) => {
  const [isHiring, setIsHiring] = useState(false);
  console.log(description, "descriptionally");
  const handleHireClick = () => {
    const id = localStorage.getItem("job_id");
    const accessToken = localStorage.getItem("access_token");

    // Construct the URL for the API endpoint
    const apiUrl = `${config.get("BACKEND_URL")}/api/v0/applications/${id}/accept`;

    // Make a POST request to accept the application
    fetch(apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      // Add any request body data if required
      // body: JSON.stringify({}),
    })
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log("Application accepted successfully");
          setIsHiring(true); // Set a state variable to indicate the hiring action
        } else {
          // Handle error
          console.error("Failed to accept application");
        }
      })
      .catch(error => {
        // Handle network error
        console.error("Network error:", error);
      });
  };

  return (
    <div className="flex flex-col md:flex-row justify-center md:space-x-20 bg-[#1A0142] 2xl:h-[913px] pt-10">
      <div className="flex px-2 py-2 text-white">
        <div className="flex flex-col items-center space-y-6 xl:space-y-6 bg-[#482773] rounded-lg lg:mt-0 xl:p-10 m-4 mx-auto py-8 px-2">
          <img className="mx-auto rounded-full sm:h-64 sm:w-64 w-32 h-32" src={userProfileImg} alt="author avatar" />
          <div className="text-center font-bold text-2xl font-spaceGrotesk">{firstName}</div>

          <div className="text-xl font-GeneralSans font-normal">{profession}</div>

          {/* border */}
          <div className="border-b-2 border-gray-300 w-64 m-2"></div>

          <div className="text-sm sm:text-base font-GeneralSans font-normal">Bengaluru, India</div>

          {/* border */}
          <div className="border-b-2 border-gray-300 w-64 m-2"></div>

          <div className="flex flex-col items-center space-y-3">
            {/* ave rate usd */}
            <div className="flex gap-x-20 justify-center items-center">
              <p className="font-semibold sm:text-lg font-GeneralSans">Avg. Rate:</p>
              <div className="sm:text-base font-GeneralSans">30USD/Per Hour</div>
            </div>

            {/* no. of projects */}
            <div className="flex justify-center items-center w-64 gap-x-1">
              <p className="font-semibold sm:text-lg font-GeneralSans">No. of Projects Completed:</p>

              <div className="rounded-md text-center w-20 h-8 px-2 text-white text-base bg-[#B27EE3] bg-opacity-30 font-GeneralSans">5</div>
            </div>
          </div>

          {toHire ? (
            <>
              {/* border */}
              <div className="border-b-2 border-gray-300 w-64 m-2"></div>
              <div className="flex flex-col space-y-2">
                <p>Learn more</p>
                <a href="/freelancer-profile" className="text-white text-center text-xl font-medium rounded shadow bg-gradient-to-l from-purple-400 to-transparent py-2 w-full">
                  HIRE
                </a>
              </div>
            </>
          ) : (
            !isEmployerProfile && (
              <div className="flex justify-center space-x-5">
                <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full p-2 bg-white">
                  <span className="sr-only">Facebook</span>
                  <img src={facebook2} alt="facebook" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full p-2 bg-white">
                  <span className="sr-only">GitHub</span>
                  <img src={youtube} alt="youtube" />
                </a>
                <a href="/" target="_blank" rel="noopener noreferrer" className="inline-block rounded-full p-2 bg-white">
                  <span className="sr-only">Twitter</span>
                  <img src={twitter} alt="twitter" />
                </a>
              </div>
            )
          )}
        </div>
      </div>
      <ProfileDetails description={description} />

      <div className="flex flex-col items-center  sm:space-y-10 text-white space-x-4 pt-8">
        <div className="flex flex-col space-y-4 md:pt-8 font-spaceGrotesk font-semibold text-xl">
          <button className="md:px-8 py-4 px-1 rounded shadow bg-gradient-to-l from-purple-400 to-transparent" onClick={handleHireClick}>
            HIRE
          </button>
          <p className="text-purple-600 text-base font-spaceGrotesk font-medium pt-4">SEND AN OFFER</p>
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
  );
};

export default FreelancerInDetail;
