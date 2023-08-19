import React from 'react';
import PropTypes from 'prop-types';
import EditProfileCard from './EditProfileCard';
import ProfileDetails from './ProfileDetails';
import ReviewCard from './ReviewCard';
import {userProfile} from '../Assets';

const EditProfile = ({isFreelancer, toHire}) => {
  return (
    <div className="flex flex-col md:flex-row justify-center md:space-x-20 bg-[#1A0142] 2xl:h-[913px] pt-10">
      <EditProfileCard
        toHire={toHire}
        isEmployerProfile={false}
        userProfileImg={userProfile}
        userName="Chandrakanth Sharma"
        profession="Product Designer"
      />
      <ProfileDetails />

      <div className="flex flex-col items-center  sm:space-y-10 text-white space-x-4 pt-8">
        {isFreelancer ? (
                    <div className="flex flex-col space-y-4   font-spaceGrotesk font-semibold text-xl">
                      <button className="sm:px-8 sm:py-4  text-center p-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
              FIND JOBS
                      </button>
                      <a
                        href="/freelancerFileSharing?isFreelancer=true"
                        className=" text-center p-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent"
                      >
              MANAGE JOBS
                      </a>
                      <p className="text-purple-600 text-base font-spaceGrotesk font-medium ">
              SWITCH TO AN EMPLOYER
                      </p>
                    </div>
                ) : (
                    <div className="flex flex-col space-y-4 md:pt-8 font-spaceGrotesk font-semibold text-xl">
                      <button className="md:px-8 py-4 px-1 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
              HIRE
                      </button>
                      <p className="text-purple-600 text-base font-spaceGrotesk font-medium pt-4">
              SEND AN OFFER
                      </p>
                    </div>
                )}

        <div className="p-6">
          <div className="flex flex-col space-y-2 space-x-2 rounded-lg border border-white w-full md:w-[300px]">
            <p className="text-center rounded-t-lg w-full h-10 bg-purple-600 text-24 font-spaceGrotesk font-semibold pt-2">
              REVIEWS
            </p>
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

EditProfile.propTypes = {
  isFreelancer: PropTypes.bool,
  toHire: PropTypes.bool,
};

export default EditProfile;
