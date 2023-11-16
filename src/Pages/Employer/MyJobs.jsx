import React from 'react';
import {LoggedInHeader, Footer} from '../../components';
import PostedJobs from '../../components/Profile/PostedJobs';

const MyJobs = () => {
  return (
    <div>
      <LoggedInHeader includeNavBar={true} category="EMPLOYER" isFreelancer={false} />
      <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold pl-2 text-white flex justify-center p-4">Manage Jobs</p>
      <div className='flex justify-center items-center w-full '>
        <PostedJobs/>
      </div>
      <Footer />
    </div>

  );
};

export default MyJobs;
