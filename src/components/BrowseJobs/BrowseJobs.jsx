/* eslint-disable */
import React, { useEffect, useRef, useState } from "react";
import { Link, useHistory, useLocation, useNavigate } from "react-router-dom";
import SkillsRequiredCard from "../BrowseJobs/SkillsRequiredCard";
import BrowseByCard from "./BrowseByCard";
import { axiosGet } from "../../utils/services/axios";

const BrowseJobs = ({ isFreelancer }) => {
  const [jobData, setJobData] = useState([]); // State variable to hold title
  const navigate = useNavigate();
  const [currentpage, setCurrentpage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const scrollableJobs = useRef(null);
  const [daysfilter, setdaysfilter] = useState(30);
  useEffect(() => {
    handleBrowse();
  }, []);
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
      scrollableDiv.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (scrollableDiv) {
        scrollableDiv.removeEventListener("scroll", handleScroll);
      }
    };
  }, [jobData, hasMore, loading]);
  const handleBrowse = async () => {
    try {
      setLoading(true);
      const apiUrl = "/api/v0/jobs";
      const params = {
        page: currentpage,
        per_page: 8,
      };
      const response = await axiosGet(apiUrl, params);
      if (!response.status) {
        throw new Error(`API error! Message: ${response.message}`);
      }
      const responseData = response;
      setJobData(prevJobData => [...prevJobData, ...responseData.results]);
      setCurrentpage(currentpage + 1);
      setHasMore(responseData.results.length >= 8);
      // Pass jobData as state to the next route using navigate
      // navigate(browseJobsRoute, {
      //   state: {
      //     jobData: responseData.results, // Pass jobData as state
      //   },
      // });
      setLoading(false);
      return true;
    } catch (error) {
      console.error("Error occurred:", error);
      setLoading(false);
      return false;
    }
  };
  const loadMore = () => {
    if (hasMore && !loading) {
      handleBrowse();
    }
  };
  const items1 = ["Graphic Designer", "Illustrator", "Programmer", "Video Editor", "3D artist", "Product Designer"];

  const items2 = ["India", "USA", "Canada", "England", "China", "Russia"];

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
          <div className="flex flex-col sm:pt-10 p-4 w-3/4 items-center">
            <div className="flex flex-wrap  sm:flex-row flex-col justify-between sm:justify-between w-3/4">
              <p className="flex sm:text-4xl text-2xl text-white font-bold pl-0">POSTED JOBS</p>
              <div className="flex flex-col items-center">
                <p className="text-white sm:text-2xl font-semibold">Posted in the last &#x2191; 30 &#x2193; days</p>
              </div>
            </div>
            <div className="md:max-h-2/4 lg:max-h-3/4 overflow-y-scroll scrollbar-hide" ref={scrollableJobs}>
              {jobData && jobData.map((job, index) => <SkillsRequiredCard isFreelancer={true} jobData={job} onClick={()=>navigate('/browseJobsInDetails')}/>)}
            </div>
          </div>
          {window.innerWidth > 640 ? (
            <div className="flex flex-col bg-[#B37EE2] sm:p-12 rounded-tl-3xl rounded-bl-3xl w-1/4">
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
