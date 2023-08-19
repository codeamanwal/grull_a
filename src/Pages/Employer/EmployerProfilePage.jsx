import React from 'react';
import {
  LoggedInHeader,
  EditProfileCard,
  ReviewCard,
  SkillsRequiredCard,
  Footer,
} from '../../components';
import {hrProfile} from '../../components/Assets';
import {Link} from 'react-router-dom';

const EmployerProfilePage = () => {
  return (
    <div className="bg-[#1A0142]  min-h-screen flex flex-col">
      <LoggedInHeader
        includeNavBar={true}
        category="FREELANCER"
        isFreelancer={false}
      />

      <div className="w-8/9  mx-auto flex-grow">
        <div className="sm:flex sm:space-x-5">
          {/* profile and reviews */}
          <div className="sm:flex hidden flex-col flex-wrap justify-center">
            <EditProfileCard
              toHire={false}
              isEmployerProfile={true}
              userProfileImg={hrProfile}
              userName="Akshita Agarwal"
              profession="HR Manager"
            />

            <div className="flex flex-col flex-wrap items-center text-white">
              <div className="flex flex-col space-y-3 space-x-3 rounded-lg border border-white">
                <p className="flex items-center justify-center rounded-t-lg bg-purple-600 text-lg font-spaceGrotesk font-semibold">
                                    REVIEWS
                </p>
                <ReviewCard rating={2} />
                <ReviewCard rating={3} />
                <ReviewCard rating={3} />
              </div>
            </div>
          </div>

          {/* description */}
          <div className="flex flex-col text-white py-2 px-1">
            <div className="flex justify-between">
              <div className="flex flex-col space-y-4">
                <div className="flex flex-col space-y-2">
                  <p className="sm:text-2xl text-xl font-spaceGrotesk font-bold">
                                        Description
                  </p>
                  <p className="sm:text-xl text-sm font-GeneralSans font-normal">
                                        I am an HR manager graduated from KMD College, actively
                                        hiring for design jobs.
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="sm:text-2xl text-xl font-spaceGrotesk font-bold">
                                        ABD PVT. LTD.
                  </p>
                  <p className="sm:text-xl text-sm font-GeneralSans font-normal">
                                        This company deals with furniture, with many freelance
                                        requirements from design to development, based in India.
                  </p>
                </div>
              </div>

              {/* right */}
              <div className="flex flex-col justify-center items-center flex-wrap space-y-4 font-spaceGrotesk font-semibold sm:text-xl p-2">
                <button className="md:px-8 sm:py-4 py-2 px-2 text-center rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
                                    EDIT JOBS
                </button>
                <p className="text-purple-600 text-center sm:text-lg font-spaceGrotesk font-medium">
                                    SWITCH TO A FREELANCER
                </p>
              </div>
            </div>

            {/* skills required card */}
            <div className="flex flex-col flex-wrap">
              <div className="sm:hidden flex items-center justify-center">
                <EditProfileCard
                  toHire={false}
                  isEmployerProfile={true}
                  userProfileImg={hrProfile}
                  userName="Akshita Agarwal"
                  profession="HR Manager"
                />
              </div>
              <Link to="/employerBrowsingPostedJobs" className="text-gray-700">
                <SkillsRequiredCard isFreelancer={false} isActive={false} />
              </Link>

              <Link to="/employerBrowsingPostedJobs" className="text-gray-700">
                <SkillsRequiredCard isFreelancer={false} isActive={true} />
              </Link>

              <Link to="/employerBrowsingPostedJobs" className="text-gray-700">
                <SkillsRequiredCard isFreelancer={false} isActive={false} />
              </Link>

              <Link to="/employerBrowsingPostedJobs" className="text-gray-700">
                <SkillsRequiredCard isFreelancer={false} isActive={true} />
              </Link>
            </div>
          </div>

          <div className="flex sm:hidden flex-col flex-wrap justify-center">
            <div className="flex flex-col flex-wrap items-center text-white">
              <div className="flex flex-col space-y-3 space-x-3 rounded-lg border border-white">
                <p className="flex items-center justify-center rounded-t-lg bg-purple-600 text-lg font-spaceGrotesk font-semibold">
                                    REVIEWS
                </p>
                <ReviewCard rating={2} />
                <ReviewCard rating={3} />
                <ReviewCard rating={3} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EmployerProfilePage;
