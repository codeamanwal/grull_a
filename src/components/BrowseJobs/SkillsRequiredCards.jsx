/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const SkillsRequiredCards = ({isFreelancer, isActive, title, description}) => {
  return (
    <div className="flex flex-wrap justify-between rounded-xl border border-solid border-purple-500 bg-[#492772] bg-opacity-70 sm:py-8 sm:px-4 py-4 px-2 2xl:w-[1200px] my-2">
      <div>
        <div className="flex flex-col items-start">
          <p className="text-white sm:text-3xl text-xl ont-medium sm:px-4 py-2">
            {title}
          </p>
        </div>
        <div>
          <div className="flex sm:flex-row flex-col sm:justify-between justify-start sm:items-center">
            <div>
              <p className="text-white sm:text-xl  text-lg font-semibold sm:px-4 py-2 sm:mb-5">
                SKILLS REQUIRED
              </p>
              <div className="flex sm:space-x-3 items-center">
                <p className="bg-[#B37EE2] px-4 py-2 rounded-xl text-white font-medium sm:text-base text-sm m-1">
                  Auto CAD
                </p>
                <p className="bg-[#B37EE2] px-4 py-2 rounded-xl text-white font-medium sm:text-base text-sm m-1">
                  MAYA
                </p>
                <Link
                  to="/browse-jobs-in-details"
                  className="text-[#B37EE2] font-normal sm:text-lg text-sm"
                >
                  more
                </Link>
              </div>
            </div>

            {/* Budget */}
            <div className="space-y-4 pt-4">
              <p className="text-white sm:text-xl text-lg font-semibold">
                BUDGET
              </p>
              <div className="border border-solid border-purple-500 rounded-lg p-2 w-1/2 sm:w-full text-center">
                <p className="text-white sm:text-lg text-sm sm:px-3">
                  100-200 USD
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isFreelancer ? (
                <div className="sm:p-8 mt-6 space-y-4">
                  <Link to="/browse-jobs-in-details">
                    <p className="sm:text-lg text-sm text-[#B37EE2]">NON-NEGOTIABLE</p>
                  </Link>

                  <button className="text-white sm:text-xl  text-sm font-medium md:px-8 py-2 px-4 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
            APPLY
                  </button>
                </div>
            ) : (
                <div className="sm:p-8 p-3 space-y-4">
                  <Link to="/browse-jobs-in-details">
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
  );
};

SkillsRequiredCards.propTypes = {
  isFreelancer: PropTypes.bool,
  isActive: PropTypes.bool,
};

export default SkillsRequiredCards;
