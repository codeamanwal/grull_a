/* eslint-disable */
import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const JobDetailsCard = ({isFreelancer, jobData,myjob}) => {

  if (!jobData) {
    // Render a loading indicator or message when jobData is undefined
    return <div>Loading...</div>;
  }

  return (
    <div className="sm:w-full md:w-2/3 ">
      <div className="flex flex-col sm:flex-row  justify-center bg-[#492772] bg-opacity-70 sm:w-auto sm:space-x-30 rounded-lg border border-purple-600 sm:p-10 -mt-16">
        <div className="flex flex-col flex-wrap justify-start space-y-6  p-2 sm:p-8">
          <div className="text-white text-center sm:text-3xl text-xl font-spaceGrotesk font-bold ">
            <p>{jobData.title}</p>
          </div>
          <div className="flex sm:space-x-16  text-white text-base font-GeneralSans font-normal">
            <p className="text-sm sm:text-base">BANGALORE, INDIA</p>
            <p className="text-sm sm:text-base">2 MONTHS</p>
            <p className="text-sm sm:text-base"> 30 APPLICANTS</p>
          </div>
          <div className="flex sm:flex-row flex-col space-y-2 w-full sm:space-x-16 text-white text-base font-GeneralSan">
            <div className="flex flex-wrap sm:flex-col space-y-2">
              <p className="font-bold sm:pt-4">JOB DESCRIPTION</p>
              <p className=" sm:w-75  w-full text-sm font-normal sm:pt-2">
                                {jobData.description}
              </p>
            </div>
            <div className="flex flex-wrap flex-col">
              <div className="flex flex-wrap flex-col space-y-2">
                <p className="font-bold sm:pt-4">{jobData.company_name}</p>
                <p className="sm:pt-2">
                                    {jobData.company_description}
                </p>
              </div>
              <p className="sm:pt-12 font-bold text-sm">
                                DOWNLOAD REFRENCE FILES
              </p>
            </div>
          </div>
          <div className="flex flex-wrap flex-col">
            <p className="text-white text-base font-GeneralSans font-bold leading-normal">
                            SKILLS REQUIRED
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 sm:gap-4 gap-2 sm:pt-4 text-white p-2 text-base">
            {jobData.required_skills.map((skill) => {
  return (
    <button className="sm:p-2 rounded-md bg-[#B27FE2]" key={skill}>
      {skill}
    </button>
  );
})}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-col  ml-1 sm:gap-y-64 sm:pt-12 py-3 space-x-4">
          <div className="space-y-6 sm:w-40 w-full">
            {isFreelancer ? (
                            <p className="text-purple-600 text-base text-center font-GeneralSans font-medium">
                                NON-NEGOTIABLE
                            </p>
                        ) : (
                            <button className="flex items-center bg-white border border-gray-300 rounded-lg p-2 ml-4">
                              <div className="h-6 w-6 bg-green-500 rounded-full"></div>
                              <span className="sm:ml-2 text-[#4301a3] px-2 opacity-1 font-semibold">
                                    ACTIVE
                              </span>
                            </button>
                        )}
            {/* Budget */}
            <div className=" space-y-4 sm:pt-8 py-4 ml-2">
              <p className="text-white font-semibold pl-4">BUDGET</p>
              <div className="border border-solid border-purple-500 rounded-lg p-2 sm:w-full w-1/2">
                <p className="text-white sm:text-lg sm:px-2">{jobData.rate_per_hour}</p>
              </div>
              {!isFreelancer && (
                <p className="text-purple-600 text-base  text-center font-GeneralSans font-medium">
                                    NON-NEGOTIABLE
                </p>
              )}
            </div>
          </div>
          {isFreelancer && !myjob&&(
  
  <Link to="/apply-proposal-page">
    <button className="text-white sm:text-2xl  px-8 py-3  text-base font-medium sm:py-4 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
      APPLY
    </button>
  </Link>
)}


        </div>
      </div>
    </div>
  );
};

JobDetailsCard.propTypes = {
  isFreelancer: PropTypes.bool,
};

export default JobDetailsCard;
