/* eslint-disable */
import React,{useEffect, useState} from 'react';
import {Link, useHistory, useLocation} from 'react-router-dom';
import SkillsRequiredCard from '../BrowseJobs/SkillsRequiredCard';
import BrowseByCard from './BrowseByCard';
import config from 'react-global-configuration';

const BrowseJobs = () => {
  const [jobData, setJobData] = useState(""); // State variable to hold title

  useEffect(() => {
    handleBrowse();
  }, []);

  const handleBrowse = async () => {
    try {
      const accessToken = localStorage.getItem('access_token');
      let apiUrl = '';      
        
        apiUrl =`${config.get('BACKEND_URL')}/api/v0/jobs?page=1&per_page=8`
        console.log('API Call for Browse Jobs:', apiUrl);

      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = await response.json();
      console.log('API Response of browse jobs:', responseData);

      setJobData(responseData.results);
      console.log(responseData.results)

      const browseJobsRoute = isFreelancer ? '/browseJobs' : '/browseFreelancers';

      // Pass jobData as state to the next route using navigate
      navigate(browseJobsRoute, {
        state: {
          jobData: responseData.results, // Pass jobData as state
        },
      });
  
      return true;
    } catch (error) {
      console.error('Error occurred:', error);
      return false;
    }

    
  };  

  console.log("BrowseJobs", jobData)

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
