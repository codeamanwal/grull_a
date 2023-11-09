import React from 'react';
import {star} from '../Assets';
import {Link} from 'react-router-dom';

const FreelancerFileSharing = () => {
  const stars = Array(5).fill(
      <img src={star} className="sm:w-15 sm:h-15 w-10 h-10" alt="star" />,
  );

  return (
    <div className="flex text-white flex-wrap  sm:w-full  justify-center sm:space-x-44  overflow-x-hidden">
      <div className="flex-col flex-wrap space-y-6 pt-20 font-semibold justify-start text-white hidden sm:flex lg:w-44">
        <Link to="/browseJobsInDetails" className="bg-purple-900 text-center bg-opacity-70 border border-solid border-purple-500 rounded-lg p-4 w-48">
          Job Details
        </Link>
        <button className="md:px-8 p-4 w-48 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
          Bid Details
        </button>
        <button className="md:px-8 p-4 w-48 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
          Files
        </button>
        <button className="bg-purple-900 bg-opacity-30 rounded-lg border border-purple-600 p-4 w-48">
          Reviews
        </button>
      </div>

      {/* <div className="sm:hidden flex flex-row space-x-2 sm:pt-20 pt-10 font-semibold justify-start sm:pl-16 text-white">
        <button className="flex-grow bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-4">
          Job Details
        </button>
        <button className="flex-grow bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-4">
          Bid Details
        </button>
        <button className="flex-grow bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-4">
          Files
        </button>
        <button className="flex-grow bg-purple-900 bg-opacity-70 rounded-lg border border-purple-600 p-4">
          Reviews
        </button>
      </div> */}

      <div className="flex flex-col flex-wrap text-white sm:space-y-7 sm:space-x-7 sm:pt-20 sm:w-3/4 w-full p-1 py-10">
        <div>
          <h2 className="text-2xl font-spaceGrotesk font-semibold pb-4">
            PROGRESS TRACKER
          </h2>
          <div className="sm:w-4/5 w-5/6 h-10 flex-shrink-0 border border-solid border-purple-500 rounded-lg bg-purple-300 relative">
            <div
              className="bg-green-500 rounded-lg absolute top-0 left-0 bottom-0"
              style={{width: '10%'}}
            ></div>
          </div>
          <div className="flex flex-row justify-between text-white sm:text-base text-sm font-GeneralSans sm:leading-24 pt-4 sm:w-4/5 w-1/2 sm:space-x-4 space-x-5 sm:ml-16 ml-10">
            <p>10% budget released on job confirmation</p>
            <p>40% budget released on completion first draft</p>
            <p>70% budget released on delivering work with all changes</p>
            <p>100% budget released on job completion</p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap sm:space-y-10 space-y-6 sm:pt-16 py-10 sm:py-3">
          <p className="text-2xl font-spaceGrotesk font-semibold py-3">
            JOB TITILE
          </p>

          <div className="flex  flex-wrap items-center justify-center space-y-3 font-GeneralSans w-full sm:w-5/6">
            <p className="sm:w-1/4 sm:text-xl text-sm font-semibold">
              Milestone 1 First Draft
            </p>
            <div className="flex justify-between space-x-2 sm:space-x-10 w-full sm:w-3/4">
              <button className="bg-purple-900 bg-opacity-70 border border-solid text-sm border-purple-500 rounded-lg text-purple-500  sm:p-4 w-full sm:w-1/3">
                Upload Files
              </button>
              <button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/3">
                Review Comments
              </button>
              <button className="bg-purple-500 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/3">
                Approved
              </button>
            </div>
          </div>

          <div className="flex  flex-wrap items-center justify-center space-y-3 font-GeneralSans w-full sm:w-5/6">
            <p className="sm:w-1/4 text-x font-semibold">
              Milestone 2 First Draft
            </p>
            <div className="flex justify-between space-x-4 sm:space-x-10 w-full sm:w-3/4">
              <button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg text-purple-500 p-2 sm:p-4 w-full sm:w-1/3">
                Upload Files
              </button>
              <button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/3">
                Review Comments
              </button>
              <button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/3">
                Request Approval
              </button>
            </div>
          </div>
          <div className="flex flex-row-reverse font-GeneralSans w-full sm:w-5/6">
            <button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/4">
              Request for Milestone
            </button>
          </div>
        </div>

        <div className="flex flex-col text-white pb-10">
          <p className="text-2xl font-spaceGrotesk font-semibold pb-4">
            Rate your work experience
          </p>
          <div className="flex space-x-1">{stars}</div>
        </div>

        <div className="flex  justify-between w-7/8 font-spaceGrotesk font-medium">
          <div className="flex flex-col sm:w-1/2">
            <p className=" text-2xl pb-4 font-semibold">
              Write a review about your work experience
            </p>
            <input
              type="text"
              className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-gray-900 sm:text-sm  h-32 w-ful"
            />
          </div>
          <div className="flex flex-wrap flex-col justify-end w-1/3 p-1">
            <button className="md:px-8 p-2 sm:w-1/2 h-12  text-xl rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
              DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerFileSharing;
