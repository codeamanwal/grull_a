/* eslint-disable */
import React,{useState} from "react";
import PropTypes from "prop-types";
import JobDetailsCard from "./JobDetailsCard";
import { ClosedChatBox, OpenedChatBox, PostJobForm } from "../../components";
import { downarrow } from "../../components/Assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import config from "react-global-configuration";
import JobDetailsCardForEmployer from "./JobDetailsCardForEmployer";
import AuthService from "../../Services/AuthService";
import { axiosDelete } from "../../utils/services/axios";
import { openNotificationWithIcon } from "../../utils/openNotificationWithIcon";

const BrowseJobInDetails = ({isOpen, setIsOpen, jobData, jobs }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isFreelancer = AuthService.isFreelancer()
  const [editJob,setEditJob] = useState(false);
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
  const editPostedJob = ()=>{
    setEditJob(!editJob);
  }
  const deletePostedJob = async () => {
    const id = jobData.id;
    try {
      const apiUrl = `/api/v0/jobs/${id}`;
      const params = {
        id: id
      };
      const response = await axiosDelete(apiUrl, params);
      
      if (!response.status) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = response;
  
      if (responseData.success) {
        openNotificationWithIcon('success', 'Job deleted successfully');
        navigate('/editProfile');
      }
      else{
        openNotificationWithIcon('error', 'Something went wrong');
      }
  
      return true;
    } catch (error) {
      console.error('Error occurred:', error);
      return false;
    }
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
  {!editJob ? (
  isFreelancer ? (
    <JobDetailsCard isFreelancer={true} jobData={jobData} />
  ) : (
    <JobDetailsCardForEmployer isFreelancer={false} jobs={jobData} />
  )
) : <PostJobForm jobData={jobData} editJob={true}/>}
    {isFreelancer ? (
  <div className="flex sm:flex-col flex-wrap sm:justify-start sm:space-y-10">
    <button className="text-white sm:text-xl font-semibold sm:px-12 sm:py-2 px-4 py-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
      MANAGE PROFILE
    </button>
    <button className="text-white sm:text-xl font-semibold sm:px-8 sm:py-2 px-4 py-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
      BROWSE MORE JOBS
    </button>
  </div>
) : (
  !editJob && (
    <div className="flex flex-col justify-between items-center space-y-4">
      <div className="flex flex-col items-center space-y-5 sm:justify-start sm:space-y-10 sm:mb-[73px]">
        <Link
          to="/freelancerApplicationView"
          className="text-white sm:text-xl font-semibold md:px-8 py-4 px-2 sm:px-12 rounded shadow bg-gradient-to-l from-purple-400 to-transparent"
          onClick={handleViewFreelancerApplicationsClick}
        >
          VIEW FREELANCER APPLICATIONS
        </Link>
        <button
          className="text-white sm:text-xl font-semibold md:px-8 py-4 sm:px-12 px-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent"
          onClick={deletePostedJob}
        >
          DELETE POSTED JOB
        </button>
        <button
          className="text-white sm:text-xl font-semibold md:px-8 py-4 sm:px-12 px-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent"
          onClick={editPostedJob}
        >
          EDIT POSTED JOB
        </button>
      </div>
      {/* <div className="">{isOpen ? <OpenedChatBox setIsOpen={setIsOpen} /> : <ClosedChatBox arrow={downarrow} onClick={setIsOpen} />}</div> */}
    </div>
  )
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
