import React from 'react';
import {
  FreelancerFileSharing,
  Footer,
  LoggedInHeader,
} from '../../components';
import {useLocation} from 'react-router-dom';

const FreelancerFileSharingPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const isFreelancer = searchParams.get('isFreelancer') === 'true';
  console.log(isFreelancer);
  return (
    <div className="flex flex-col min-h-screen bg-[#1A0142]">
      {isFreelancer ? (
                <LoggedInHeader
                  includeNavBar={true}
                  category="JOBS"
                  isFreelancer={true}
                />
            ) : (
                <LoggedInHeader
                  includeNavBar={true}
                  category="FREELANCER"
                  isFreelancer={false}
                />
            )}

      <div className="flex-grow overflow-y-auto">
        <FreelancerFileSharing />
      </div>
      <Footer />
    </div>
  );
};

export default FreelancerFileSharingPage;
