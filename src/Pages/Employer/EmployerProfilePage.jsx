/* eslint-disable */
import React, {useState, useEffect} from 'react';
import fetchMeData from '../../Services/User';
import {
  LoggedInHeader,
  EditProfileCard,
  Footer,
} from '../../components';

const EmployerProfilePage = () => {
  const [meData, setMeData] = useState({});

  useEffect(() => {
    console.log('In useEffect');
    fetchMeData()
        .then(
            (response) => {
              console.log(response);
              setMeData(response);
            },
        )
        .catch((error) => {
          console.log(error);
        });
  }, []);

  return (
    <div className="bg-[#1A0142]  min-h-screen flex flex-col">
      <LoggedInHeader
        includeNavBar={true}
        category="EMPLOYER"
        isFreelancer={false}
      />

      <div className="w-8/9  mx-auto flex-grow">
        <div className="sm:flex sm:space-x-5">
          {/* profile and reviews */}
          <div className="sm:flex hidden flex-col flex-wrap justify-center">
            <EditProfileCard
              isEmployerProfile={true}
              meData={meData}
            />
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
                    {meData['description']}
                  </p>
                </div>

                <div className="flex flex-col space-y-2">
                  <p className="sm:text-2xl text-xl font-spaceGrotesk font-bold">
                    {meData['company']}
                  </p>
                  <p className="sm:text-xl text-sm font-GeneralSans font-normal">
                    {meData['company_description']}
                  </p>
                </div>
              </div>

              {/* right */}
              <div className="flex flex-col justify-center items-center flex-wrap space-y-4 font-spaceGrotesk font-semibold sm:text-xl p-2">
                <button className="md:px-8 sm:py-4 py-2 px-2 text-center rounded shadow bg-gradient-to-l from-purple-400 to-transparent"
                >
                                    Manage Jobs
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
                  isEmployerProfile={true}
                />
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
