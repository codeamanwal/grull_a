/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import JobDetailsCard from "./JobDetailsCard";
import { PostJobForm } from "../../components";
import { Link,  useNavigate } from "react-router-dom";
import JobDetailsCardForEmployer from "./JobDetailsCardForEmployer";
import AuthService from "../../Services/AuthService";
import { axiosDelete } from "../../utils/services/axios";
import { openNotificationWithIcon } from "../../utils/openNotificationWithIcon";

const BrowseJobInDetails = ({ isOpen, setIsOpen, jobData, jobs }) => {
  const navigate = useNavigate();
  const isFreelancer = AuthService.isFreelancer();
  const [editJob, setEditJob] = useState(false);
  const [trackProgress,setTrackProgress] = useState(false);
  const [myjob,setMyJob] = useState(false)
  const editPostedJob = () => {
    setEditJob(!editJob);
  };
  const redirect = () => {
    const url = trackProgress||myjob?'/job-progress-status':'/freelancers-applications'
    navigate(url, {
      state: {
        jobId: jobData.id,
        jobData:jobData
      },
    });

  };
  const deletePostedJob = async () => {
    const id = jobData.id;
    try {
      const apiUrl = `/api/v0/jobs/${id}`;
      const params = {
        id: id,
      };
      const response = await axiosDelete(apiUrl, params);

      if (!response.status) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = response;

      if (responseData.success) {
        openNotificationWithIcon("success", "Job deleted successfully");
        navigate("/my-profile");
      } else {
        openNotificationWithIcon("error", "Something went wrong");
      }

      return true;
    } catch (error) {
      console.error("Error occurred:", error);
      return false;
    }
  };
  return (
    <div className="flex  flex-wrap sm:justify-between  justify-center sm:w-11/12 mx-auto py-28 space-y-10">
      {!editJob ? (
        isFreelancer ? (
          <JobDetailsCard isFreelancer={true} jobData={jobData} myjob={myjob}/>
        ) : (
          <JobDetailsCardForEmployer isFreelancer={false} jobs={jobData} />
        )
      ) : (
        <PostJobForm jobData={jobData} editJob={true} />
      )}
      {isFreelancer ? (
        <div className="flex sm:flex-col flex-wrap sm:justify-start sm:space-y-10">
           {myjob&&<button className="text-white sm:text-xl font-semibold sm:px-12 sm:py-2 px-4 py-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent" onClick={redirect}>TRACK JOB PROGRESS</button>}
          <Link to='/my-profile'><button className="text-white sm:text-xl font-semibold sm:px-12 sm:py-2 px-4 py-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent" >MANAGE PROFILE</button></Link>
          <Link to='/jobs'><button className="text-white sm:text-xl font-semibold sm:px-8 sm:py-2 px-4 py-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">BROWSE MORE JOBS</button></Link>
        </div>
      ) : (
        !editJob && (
          <div className="flex flex-col justify-between items-center space-y-4">
            <div className="flex flex-col items-center   space-y-5 sm:justify-start sm:space-y-10 sm:mb-[73px]">
            <button  className="text-white sm:text-xl font-semibold md:px-8 py-4 px-2 sm:px-12 rounded shadow bg-gradient-to-l from-purple-400 to-transparent" onClick={redirect}>
                {trackProgress?"TRACK JOB PROGRESS":"VIEW FREELANCER APPLICATIONS"}
              </button>
              <button className="text-white sm:text-xl font-semibold md:px-8 py-4 sm:px-12 px-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent" onClick={deletePostedJob}>
                DELETE POSTED JOB
              </button>
              <button className="text-white sm:text-xl font-semibold md:px-8 py-4 sm:px-12 px-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent" onClick={editPostedJob}>
                EDIT POSTED JOB
              </button>
            </div>
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
