/* eslint-disable */
import React from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import SkillsRequiredCard from '../BrowseJobs/SkillsRequiredCard';
import BrowseByCard from './BrowseByCard';

const BrowseJobs = () => {
  const location = useLocation();
  const { jobData } = location.state || {};

  console.log("BrowseJobs", jobData)
  // console.log("data", jobData.title)
  // console.log("data", jobData.description)
  const items1 = [
    'Graphic Designer',
    'Illustrator',
    'Programmer',
    'Video Editor',
    '3D artist',
    'Product Designer',
  ];

  const items2 = ['India', 'USA', 'Canada', 'England', 'China', 'Russia'];

  return (
    <div className="browse-jobs-container mt-10 sm:mt-0">
      <div className="2xl:h-[913px] overflow-y-hidden">
        <div className="flex flex-wrap justify-between items-center space-y-3">
          {window.innerWidth <= 640 ? (
                        <div className="flex flex-col bg-[#B37EE2] sm:p-12  p-6 sm:rounded-tl-3xl sm:rounded-bl-3xl  mx-auto">
                          <BrowseByCard topic="CATEGORY" items={items1} />
                          <BrowseByCard topic="LOCATION" items={items2} />
                        </div>
                    ) : null}
          <div className="flex flex-col sm:pt-10 p-2">
            <div className="flex flex-wrap  sm:flex-row flex-col items-center sm:justify-between">
              <p className="flex sm:text-4xl text-2xl text-white font-bold pl-6">
                POSTED JOBS
              </p>
              <div className="flex flex-col items-center">
                <p className="text-white sm:text-2xl font-semibold">
                  Posted in the last &#x2191; 30 &#x2193; days
                </p>
              </div>
            </div>
            {jobData && jobData.slice(0, 3).map((job, index) => (
  <Link to={{
    pathname: "/browseJobsInDetails",
    // state: {
    //    job: job// Pass description from job
    // },
  }} key={job.id}>
    <SkillsRequiredCard isFreelancer={true} jobData={job} />
  </Link>
))}

          </div>
          {window.innerWidth > 640 ? (
                        <div className="flex flex-col bg-[#B37EE2] sm:p-12 rounded-tl-3xl rounded-bl-3xl">
                          <BrowseByCard topic="CATEGORY" items={items1} />
                          <BrowseByCard topic="LOCATION" items={items2} />
                        </div>
                    ) : null}
        </div>
      </div>
    </div>
  );
};

export default BrowseJobs;
