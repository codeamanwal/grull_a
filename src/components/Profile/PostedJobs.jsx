import React, {useEffect, useRef, useState} from 'react';
import {axiosGet} from '../../utils/services/axios';
import SkillsRequiredCard from '../BrowseJobs/SkillsRequiredCard';
import {useNavigate} from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import {Typography} from 'antd';
const PostedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  // const [locationFilter, setlocationFilter] = useState([]);
  // const [categoryFilter, setcategoryFilter] = useState([]);
  const isFreelancer = AuthService.isFreelancer();
  const [hasMore, setHasMore] = useState(true);
  const scrollableJobs = useRef(null);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollableDiv = scrollableJobs.current;
      const isAtBottom = Math.abs(scrollableDiv.scrollHeight - scrollableDiv.scrollTop - scrollableDiv.clientHeight) < 1;
      if (isAtBottom && !loading && hasMore) {
        loadMore();
      }
    };
    const scrollableDiv = scrollableJobs.current;
    if (scrollableDiv) {
      scrollableDiv.addEventListener('scroll', handleScroll);
    }
    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener('scroll', handleScroll);
      }
    };
  }, [hasMore, loading]);
  const handleBrowseJobsPosted = async () => {
    setLoading(true);

    try {
      const apiUrl = '/api/v0/users/me/jobs';
      const params = {
        page: page,
        per_page: 8,
        status: 'ONGOING,PENDING,COMPLETED',
        user_type: isFreelancer?'freelancer':'employer',
        // category: categoryFilter,
        // location: locationFilter,
      };
      const encodedParams = Object.entries(params)
          .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
          .join('&');

      const urlWithParams = `${apiUrl}?${encodedParams}`;

      const response = await axiosGet(urlWithParams);

      if (!response.status) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = response;
      setJobs((prevJobData) => [...prevJobData, ...responseData.results]);
      setPage(page + 1);
      setHasMore(responseData.results.length >= 8);
      setLoading(false);
      return true;
    } catch (error) {
      setLoading(false);
      return false;
    }
  };
  useEffect(() => {
    handleBrowseJobsPosted();
  }, []);
  const loadMore = () => {
    if (hasMore && !loading) {
      handleBrowseJobsPosted();
    }
  };
  const redirectToJobDetails=(jobData)=>{
    const browseJobsInDetails = `/jobs/${jobData.id}`;
    navigate(browseJobsInDetails, {
      state: {
        jobData: jobData, // Pass jobData as state
      },
    });
  };
  return (
    <div className='overflow-y-scroll scrollbar-hide lg:h-[650px] w-full flex flex-col items-center' ref={scrollableJobs}
    >
      {jobs?
      (jobs.map((job, index) => (
        <SkillsRequiredCard key={index} isFreelancer={false} freelancerManageJobs={isFreelancer} jobData={job} onClick={() => redirectToJobDetails(job)} isActive={true}/>
      ))):
        <Typography className='text-white'> Nothing to show here</Typography>
      }
    </div>
  );
};

export default PostedJobs;
