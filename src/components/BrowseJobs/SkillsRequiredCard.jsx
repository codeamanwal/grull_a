/* eslint-disable */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Link, useParams, useNavigate} from 'react-router-dom';
import config from 'react-global-configuration';
import AuthService from '../../Services/AuthService';

const SkillsRequiredCard = ({isFreelancer, jobData, onClick}) => {
  const [applied, setApplied] = useState(false); // State to keep track of whether applied or not
  const {id} = useParams();
  const navigate = useNavigate();
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const accessToken = AuthService.getToken();
  const redirect = ()=>{
    const browseJobsInDetails = '/browseJobsInDetails';

    // Pass both paths and states in a single navigate call
    navigate(
        browseJobsInDetails, {
          state: {
            jobData: jobData,
          }},
    );
  };
  const handleApply = async () => {
    // Perform API request here
    try {
      const id = jobData.id;
      const response = await fetch(`${config.get('BACKEND_URL')}/api/v0/jobs/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await response.json();

      // const browseJobs = "/browseJobsInDetails";

      // // Pass jobData as state to the next route using navigate
      // navigate(browseJobs, {
      //   state: {
      //     description: data.description, // Pass jobData as state
      //     title: data.title
      //   },
      // });
      const browseJobsInDetails = '/browseJobsInDetails';

      // Pass jobData as state to the next route using navigate
      navigate(browseJobsInDetails, {
        state: {
          jobData: jobData, // Pass jobData as state
        },
      });

      setApplied(true); // Set the applied state to true
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const firstTwoSkills = jobData['required_skills'].splice(0, 2).map(
      (item) => {
        return <>
          <p className="bg-[#B37EE2] px-4 py-2 rounded-xl text-white font-medium sm:text-base text-sm m-1">
            {item}
          </p>
        </>;
      },
  );

  const jobSkillsElem = firstTwoSkills.concat(
    [
      <>
        <p

          className="text-[#B37EE2] font-normal sm:text-lg text-sm"
        >
          more
        </p>
      </>
    ]
  );

  // console.log("data", jobData)
  if (jobData) {
    return (
      <Link >
        <div className="flex flex-wrap justify-between rounded-[55px] border border-solid border-purple-500 bg-[#492772] bg-opacity-70 sm:py-8 sm:px-4 py-2 px-2 2xl:w-[900px] my-5 " onClick={redirect}>
          <div>
            <div className="flex flex-col items-start">
              <p className="text-white sm:text-3xl text-xl ont-medium sm:px-4 py-2" id="title">{jobData.title}</p>
            </div>
            <div>
              <div className="flex sm:flex-row flex-col sm:justify-between justify-start sm:items-center">
                <div>
                  <p className="text-white sm:text-xl  text-lg font-semibold sm:px-4 py-2 sm:mb-5">
                Skills Required
                  </p>
                  <div className="flex sm:space-x-3 items-center">
                    {jobSkillsElem}
                  </div>
                </div>

                {/* Budget */}
                <div className="space-y-4 pt-4">
                  <p className="text-white sm:text-xl text-lg font-semibold">
                Budget
                  </p>
                  <div className="border border-solid border-purple-500 rounded-lg p-2 w-1/2 sm:w-full text-center">
                    <p className="text-white sm:text-lg text-sm sm:px-3">
                      {jobData['rate_per_hour']} INR / hour
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {isFreelancer ? (
        <div className="sm:p-8 mt-6 space-y-4">
          {/* <Link to={{
  pathname: "/browseJobsInDetails",
}}> */}
          <p className="sm:text-lg text-sm text-[#B37EE2]">NON-NEGOTIABLE</p>
          {/* </Link> */}

          <button
            onClick={handleApply} // Call handleApply when the button is clicked
            className="text-white sm:text-xl  text-sm font-medium md:px-8 py-2 px-4 rounded shadow bg-gradient-to-l from-purple-400 to-transparent"
            disabled={applied} // Disable the button if already applied
          >
            {applied ? 'APPLIED' : 'APPLY'}
          </button>
        </div>
      ) : (
        <div className="sm:p-8 p-3 space-y-4">
          <Link to={{
            pathname: '/browseJobsInDetails',
            state: {
              jobData: jobData, // Pass jobData as state
            },
          }}>
            <p className="text-lg text-[#B37EE2]">12 FREELANCERS APPLIED</p>
          </Link>

          {isActive ? (
            <button className="flex items-center bg-white border border-gray-300 rounded-lg p-2">
              <div className="h-6 w-6 bg-green-500 rounded-full"></div>
              <span className="ml-2 text-[#4301a3] opacity-1 font-semibold">
                ACTIVE
              </span>
            </button>
          ) : (
            <button className="flex items-center bg-white border border-gray-300 rounded-lg p-2">
              <div className="h-6 w-6 bg-red-500 rounded-full"></div>
              <span className="ml-2 text-[#4301a3] opacity-1 font-semibold">
                COMPLETED
              </span>
            </button>
          )}
        </div>
      )}
        </div>
      </Link>
    );
  } else {
    // Handle the case where jobData is undefined or does not have a title property
    return (
      <div>
        <p>Error: Job data not available</p>
      </div>
    );
  };

  SkillsRequiredCard.propTypes = {
    isFreelancer: PropTypes.bool,
    isActive: PropTypes.bool,
  };
};

export default SkillsRequiredCard;
