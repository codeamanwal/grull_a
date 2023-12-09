/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import {youtube, twitter, facebook2} from '../Assets';

const BrowseFreelancerProfile = ({
  userProfileImg,
  toHire,
  isEmployerProfile,
  data,
}) => {
  const isEditing = false;
  console.log(data)
  return (
    <div className="flex px-2 py-2 text-white">
      <div className="flex flex-col items-center space-y-6 xl:space-y-6 bg-[#482773] rounded-lg lg:mt-0 xl:p-5 m-4 mx-auto py-8 px-2">
        <img
          className="mx-auto rounded-full md:h-20 md:w-20 lg:h-64 lg:w-64 w-12 h-12"
          src={userProfileImg}
          alt="author avatar"
        />
        <div className="text-center font-bold sm:text-l lg:text-lg font-spaceGrotesk">
          {data?.full_name}
        </div>

        <div className="text-xl font-GeneralSans font-normal">{data?.role}</div>

        {/* border */}
        <div className="border-b-2 border-gray-300 sm:w-40 lg:w-64 m-2"></div>

        <div className="text-sm sm:text-base font-GeneralSans font-normal">
          {data?.location?`${data.location.city} , ${data?.location?.country}`:null}
        </div>

        {/* border */}
        <div className="border-b-2 border-gray-300 sm:w-40 lg:w-64 m-2"></div>

        {isEmployerProfile ? (
                    <div className="flex flex-col justify-start items-center space-y-2">
                      {/* ave rate usd */}
                      <div className="flex gap-x-20 justify-center items-center">
                        <p className="font-semibold sm:text-l lg:text-lg font-GeneralSans">
                Avg. Budget:
                        </p>
                        <div className="text-base font-GeneralSans">300USD</div>
                      </div>

                      {/* no. of projects */}
                      <div className="flex justify-center items-center sm:w-40 lg:w-64 gap-x-1">
                        <p className="font-semibold text-lg font-GeneralSans">
                No. of Jobs Posted:
                        </p>
                        {isEditing ? (
                                <input
                                  placeholder=""
                                  type="number"
                                  className="rounded-md text-center w-20 h-8 px-2 text-white text-base bg-[#B27EE3] bg-opacity-30"
                                />
                            ) : (
                                <div className="rounded-md text-center w-20 h-8 px-2 text-white text-base bg-[#B27EE3] bg-opacity-30 font-GeneralSans">
                  50
                                </div>
                            )}
                      </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-3">
                      {/* ave rate usd */}
                      <div className="flex gap-x-20 justify-center items-center">
                        <p className="font-semibold sm:text-l lg:text-lg font-GeneralSans">
                Avg. Rate:
                        </p>
                        <div className="sm:text-base font-GeneralSans">
                {data.average_rate_offered?data.average_rate_offered:0}
                        </div>
                      </div>

                      {/* no. of projects */}
                      <div className="flex justify-center items-center sm:w-40 lg:w-64 gap-x-1">
                        <p className="font-semibold sm:text-l lg:text-lg font-GeneralSans">
                No. of Projects Completed:
                        </p>
                        {isEditing ? (
                                <input
                                  placeholder=""
                                  type="number"
                                  className="rounded-md text-center w-20 h-8 px-2 text-white text-base bg-[#B27EE3] bg-opacity-30"
                                />
                            ) : (
                                <div className="rounded-md text-center w-20 h-8 px-2 text-white text-base bg-[#B27EE3] bg-opacity-30 font-GeneralSans">
                  {data?.jobs_completed_count}
                                </div>
                            )}
                      </div>
                    </div>
                )}

        {toHire ? (
                    <>
                      {/* border */}
                      <div className="border-b-2 border-gray-300 sm:w-40 lg:w-64 m-2"></div>
                      <div className="flex flex-col space-y-2">
                        <p>Learn more</p>
                        <a
                          href={`/freelancers/${data.id}`}
                          className="text-white text-center text-xl font-medium rounded shadow bg-gradient-to-l from-purple-400 to-transparent py-2 w-full"
                        >
                HIRE
                        </a>
                      </div>
                    </>
                ) : (
                    !isEmployerProfile && (
                      <div className="flex justify-center space-x-5">
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-full p-2 bg-white"
                        >
                          <span className="sr-only">Facebook</span>
                          <img src={facebook2} alt="facebook" />
                        </a>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-full p-2 bg-white"
                        >
                          <span className="sr-only">GitHub</span>
                          <img src={youtube} alt="youtube" />
                        </a>
                        <a
                          href="/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-block rounded-full p-2 bg-white"
                        >
                          <span className="sr-only">Twitter</span>
                          <img src={twitter} alt="twitter" />
                        </a>
                      </div>
                    )
                )}
      </div>
    </div>
  );
};

BrowseFreelancerProfile.propTypes = {
  userProfileImg: PropTypes.string,
  toHire: PropTypes.bool,
  isEmployerProfile: PropTypes.bool,
  userName: PropTypes.string,
  profession: PropTypes.string,
};

export default BrowseFreelancerProfile;
