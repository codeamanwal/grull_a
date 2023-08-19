import React from 'react';
import PropTypes from 'prop-types';

const JobDetailsCard = ({isFreelancer}) => {
  return (
    <div className="sm:w-2/3 w-full">
      <div className="flex flex-col sm:flex-row  justify-center bg-[#492772] bg-opacity-70 sm:w-auto sm:space-x-36 rounded-lg border border-purple-600 sm:p-10 -mt-16">
        <div className="flex flex-col flex-wrap justify-start space-y-6  p-2 sm:p-8">
          <div className="text-white text-center sm:text-3xl text-xl font-spaceGrotesk font-bold ">
            <p>Need someone to design some product 3D renders</p>
          </div>
          <div className="flex flex-wrap sm:space-x-16 space-x-5 text-white text-base font-GeneralSans font-normal">
            <p className="text-sm sm:text-base">BANGALORE, INDIA</p>
            <p className="text-sm sm:text-base">2 MONTHS</p>
            <p className="text-sm sm:text-base"> 30 APPLICANTS</p>
          </div>
          <div className="flex sm:flex-row flex-col space-y-2 w-full sm:space-x-16 text-white text-base font-GeneralSan">
            <div className="flex flex-wrap sm:flex-col space-y-2">
              <p className="font-bold sm:pt-4">JOB DESCRIPTION</p>
              <p className=" sm:w-72  w-full text-sm font-normal sm:pt-2">
                                Looking for a skilled designer to help me make 10-15 product
                                renders in 3 dimensional, high quality of furniture Looking for
                                a skilled designer to help me make 10-15 product renders in 3
                                dimensional, high quality of furniture and more..
              </p>
            </div>
            <div className="flex flex-wrap flex-col">
              <div className="flex flex-wrap flex-col space-y-2">
                <p className="font-bold sm:pt-4">COMPANY NAME</p>
                <p className="sm:pt-2">
                                    We are a kids furniture retail company based in Bangalore,
                                    India with many stores.
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
              <button className="sm:p-2 s p-1 rounded-md bg-[#B27FE2] ">
                                Auto CAD
              </button>
              <button className="sm:p-2  p-1 rounded-md bg-[#B27FE2]">
                                MAYA
              </button>
              <button className="sm:p-2  p-1 rounded-md bg-[#B27FE2]">
                                Adobe Dimension
              </button>
              <button className="sm:p-2  p-1 rounded-md bg-[#B27FE2]">
                                Adobe Creative Cloud
              </button>
              <button className="sm:p-2  p-1 rounded-md bg-[#B27FE2]">
                                Photoshop
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap flex-col  space-y-3 sm:gap-y-64 sm:pt-12 py-3">
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
                <p className="text-white sm:text-lg sm:px-2">100-200 USD</p>
              </div>
              {!isFreelancer && (
                <p className="text-purple-600 text-base  text-center font-GeneralSans font-medium">
                                    NON-NEGOTIABLE
                </p>
              )}
            </div>
          </div>
          {isFreelancer && (
            <a
              href="/applyProposal"
              className="text-white w-1/2 m-4  sm:w-full text-center sm:text-xl font-medium md:px-8 py-2 px-4 rounded shadow bg-gradient-to-l from-purple-400 to-transparent"
            >
                            APPLY
            </a>
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
