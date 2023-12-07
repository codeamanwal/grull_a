import React from 'react';
import {star} from '../Assets';
import {useLocation} from 'react-router-dom';
import AuthService from '../../Services/AuthService';

const FreelancerFileSharing = () => {
  const location = useLocation();
  console.log(location.state);
  const isFreelancer = AuthService.isFreelancer();
  console.log(isFreelancer);
  const stars = Array(5).fill(
      <img src={star} className="sm:w-15 sm:h-15 w-10 h-10" alt="star" />,
  );

  return (
    <div className="flex text-white flex-wrap  sm:w-full  justify-center  overflow-x-hidden">
      <div className="flex-col flex-wrap space-y-6 pt-20 font-semibold justify-start text-white hidden sm:flex lg:w-44">
      </div>

      <div className="sm:hidden flex flex-row space-x-2 sm:pt-20 pt-10 font-semibold justify-start sm:pl-16 text-white">
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
      </div>

      <div className="flex flex-col flex-wrap text-white sm:space-y-7 sm:space-x-7 sm:pt-20 sm:w-3/4 w-full p-1 py-10">
        <div>
          <h2 className="text-2xl font-spaceGrotesk font-semibold pb-4">
            PROGRESS TRACKER
          </h2>
          <div className="sm:w-4/5 w-5/6 h-10 flex-shrink-0 border border-solid border-purple-500 rounded-lg bg-purple-300 relative">
            <div
              className="bg-green-500 rounded-lg absolute top-0 left-0 bottom-0"
              style={{width: '75%'}}
            ></div>
          </div>
          <div className="flex flex-row justify-between text-white sm:text-base text-sm font-GeneralSans sm:leading-24 pt-4 sm:w-4/5 w-1/2 sm:space-x-4 space-x-5 ">
            <p>First Draft</p>
            <p>Changes and Correction</p>
            <p>Work Delivered</p>

          </div>
        </div>

        <div className="flex flex-col flex-wrap sm:space-y-10 space-y-6 sm:pt-16 py-10 sm:py-3">
          <p className="text-2xl font-spaceGrotesk font-semibold py-3">
            {location.state.jobData.title}
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
                {!isFreelancer?'Add Comments':'Review Comments'}
              </button>
              <button className="bg-purple-500 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/3">
                Approve
              </button>
            </div>
          </div>
          <div className="flex flex-row-reverse font-GeneralSans w-full sm:w-5/6">
            <button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/4">
              Release Payment
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
            <textarea
              type="text"
              className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-white sm:text-sm  h-32 w-full p-4"
            />
          </div>
          <div className="flex flex-wrap flex-col justify-end w-1/3 p-1">
            <button className="md:px-8 p-2 sm:w-3/4 h-12  text-xl rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
              MARK AS DONE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerFileSharing;
