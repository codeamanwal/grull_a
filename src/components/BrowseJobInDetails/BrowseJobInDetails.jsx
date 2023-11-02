/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import JobDetailsCard from "./JobDetailsCard";
import { ClosedChatBox, OpenedChatBox } from "..";
import { downarrow } from "../Assets";
import { Link, useLocation } from "react-router-dom";
import config from "react-global-configuration";
import JobDetailsCardForEmployer from "./JobDetailsCardForEmployer";

const BrowseJobInDetails = ({ isFreelancer, isOpen, setIsOpen, jobData, jobs }) => {
  const location = useLocation();

  console.log("jobData in BrowseJobsInDetails:", jobData);

  const handleManagePostedJobsClick = () => {
    console.log("des", description);
    const jobId = localStorage.getItem("job_id");
    const accessToken = localStorage.getItem("access_token");

    const apiUrl = `${config.get("BACKEND_URL")}/api/v0/users/me/jobs?page=1&per_page=8`;

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        if (response.ok) {
          // Handle success
          console.log("Posted jobs managed successfully");
          // Redirect or perform any other action after managing
        } else {
          // Handle error
          console.error("Failed to manage posted jobs");
        }
      })
      .catch(error => {
        // Handle network error
        console.error("Network error:", error);
      });
  };

  const handleViewFreelancerApplicationsClick = () => {
    const jobId = localStorage.getItem("job_id");
    const accessToken = localStorage.getItem("access_token");
  
    const apiUrl = `${config.get("BACKEND_URL")}/api/v0/jobs/${jobId}/applications?page=1&per_page=8`;
  
    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
    })
      .then(response => {
        if (response.ok) {
          console.log("Viewed freelancer applications successfully");
        } else {
          console.error("Failed to view freelancer applications");
        }
      })
      .catch(error => {
        console.error("Network error:", error);
      });
  };
  
  

  return (
    <div className="flex  flex-wrap sm:justify-between  justify-center sm:w-11/12 mx-auto py-28 space-y-10">
      {isFreelancer ? <JobDetailsCard isFreelancer={true} jobData={jobData} /> : <JobDetailsCardForEmployer isFreelancer={false} jobs={jobs} />}

      {isFreelancer ? (
        <div className="flex sm:flex-col flex-wrap sm:justify-start sm:space-y-10">
          <button className="text-white sm:text-xl font-semibold sm:px-12 sm:py-2 px-4  py-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">MANAGE PROFILE</button>
          <button className="text-white sm:text-xl font-semibold  sm::px-8 sm:py-2 px-4 py-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">BROWSE MORE JOBS</button>
        </div>
      ) : (
        <div className="flex flex-col  justify-between items-center space-y-4 ">
          <div className="flex flex-col items-center   space-y-5 sm:justify-start sm:space-y-10 sm:mb-[73px]">
            <Link to="/freelancerApplicationView" className="text-white sm:text-xl font-semibold md:px-8 py-4 px-2 sm:px-12 rounded shadow bg-gradient-to-l from-purple-400 to-transparent" onClick={handleViewFreelancerApplicationsClick}>
              VIEW FREELANCER APPLICATIONS
            </Link>
            <button className="text-white sm:text-xl font-semibold md:px-8 py-4 sm:px-12  px-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent" onClick={handleManagePostedJobsClick}>
              MANAGE POSTED JOB
            </button>
          </div>

          <div className="">{isOpen ? <OpenedChatBox setIsOpen={setIsOpen} /> : <ClosedChatBox arrow={downarrow} onClick={setIsOpen} />}</div>
        </div>
      )}
    </div>
  );
};

BrowseJobInDetails.propTypes = {
  isFreelancer: PropTypes.bool,
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};

export default BrowseJobInDetails;
