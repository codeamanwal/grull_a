import React from 'react';
import {
  BrowseFreelancers,
  LoggedInHeader,
  EditProfileCard,
  Footer,
} from '../../components';
import {userProfile} from '../../components/Assets';

const BrowseFreelancersPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A0142]">
      <LoggedInHeader
        includeNavBar={true}
        category="FREELANCER"
        isFreelancer={false}
      />
      <div className="flex sm:flex-row space-y-6 flex-col space-x-6 ">
        <div className="flex flex-col sm:space-y-4 space-y-6 font-bold sm:text-2xl text-white justify-start mt-4">
          <p className="sm:pl-20 text-center text-2xl font-bold">
						BROWSE FREELANCERS
          </p>

          <div className="p-2">
            {window.innerWidth <= 640 ? <BrowseFreelancers /> : null}
          </div>

          <div className="grid sm:grid-cols-4 sm:gap-20">
            <EditProfileCard
              toHire={true}
              isEmployerProfile={false}
              userProfileImg={userProfile}
              userName="Chandrakanth Sharma"
              profession="Product Designer"
            />

            <EditProfileCard
              toHire={true}
              isEmployerProfile={false}
              userProfileImg={userProfile}
              userName="Chandrakanth Sharma"
              profession="Product Designer"
            />

            <EditProfileCard
              toHire={true}
              isEmployerProfile={false}
              userProfileImg={userProfile}
              userName="Chandrakanth Sharma"
              profession="Product Designer"
            />
          </div>
        </div>

        {window.innerWidth > 640 ? <BrowseFreelancers /> : null}
      </div>
      <Footer />
    </div>
  );
};

export default BrowseFreelancersPage;
