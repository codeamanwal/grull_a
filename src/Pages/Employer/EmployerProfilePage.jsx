/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {
  LoggedInHeader,
  EditProfileCard,
  ReviewCard,
  SkillsRequiredCards,
  Footer,
} from '../../components';
import {hrProfile} from '../../components/Assets';
import {Link, useNavigate} from 'react-router-dom';
import config from 'react-global-configuration';

const EmployerProfilePage = () => {
  const [title, setTitle] = useState(''); // Declare title state
  const [description, setDescription] = useState('');
  const [jobs, setJobs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getJobs(); // Call the function when the component is mounted
  }, []); // Empty dependency array means it runs once when mounted

  const handleEditJobsClick = () => {
    
    const jobId = localStorage.getItem('job_id');
    const accessToken = localStorage.getItem('access_token');

    const requestData = {
      title: "title",
      description: "developer",
    };

    const apiUrl = `${config.get('BACKEND_URL')}/api/v0/jobs/${jobId}`;

    fetch(apiUrl, {
      method: 'PATCH', 
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${accessToken}`,
      },
      body: JSON.stringify(requestData),
    })
      .then((response) => {
        if (response.ok) {
          // Handle success
          console.log('Job editing successful');
          // Redirect or perform any other action after editing
        } else {
          // Handle error
          console.error('Failed to edit job');
        }
      })
      .catch((error) => {
        // Handle network error
        console.error('Network error:', error);
      });
  };

  const getJobs = async () => {
    try {
      const jobId = localStorage.getItem('job_id');
      const accessToken = localStorage.getItem('access_token');
      const apiUrl = `${config.get('BACKEND_URL')}/api/v0/users/me/jobs?page=1&per_page=8`;
      
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      if (response.ok) {
        // Handle success
        const responseData = await response.json();
        const jobs = responseData.results;
        setJobs(jobs);
        console.log(responseData.results, 'Jobs retrieved successfully');
        

        // jobs.forEach((job) => {
        //   const jobTitle = job.title;
        //   const jobDescription = job.description;
        //   console.log('Job Title:', jobTitle);
        //   console.log('Description:', jobDescription);
        //   setTitle(jobTitle);
        //   setDescription(jobDescription);
        // });
        // You can parse the response data here if needed
      } else {
        // Handle error
        console.error('Failed to get jobs');
        const errorData = await response.json();
        console.error('Error details:', errorData);
      }
    } catch (error) {
      // Handle network error
      console.error('Network error:', error);
    }
  };  

  const handleSkillCardClick = (jobs) => {
    navigate('/employerBrowsingPostedJobs', {
      state: {
        jobs, // Pass the clicked job data to the next page
      },
    });
  };

  console.log('Job Title outsede:', title);
  console.log('Description outsie:', description);

 

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
                <button className="md:px-8 sm:py-4 py-2 px-2 text-center rounded shadow bg-gradient-to-l from-purple-400 to-transparent"
                onClick={handleEditJobsClick}
                >
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
              <div className="flex flex-col flex-wrap">
  {/* {jobs.slice(0, 4).map((job) => (
    <Link
      to="/employerBrowsingPostedJobs"
      className="text-gray-700"
      key={job.id}
    >
      <SkillsRequiredCards
        isFreelancer={false}
        isActive={false}
        title={job.title}
        description={job.description}
      />
    </Link>
  ))} */}
{jobs.slice(0, 4).map((job) => (
          <div key={job.id} onClick={() => handleSkillCardClick(job)}>
            <SkillsRequiredCards
              isFreelancer={false}
              isActive={false}
              title={job.title}
              description={job.description}
            />
          </div>
        ))}


</div>

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
