/* eslint-disable */
import React, { useEffect } from "react";
import { projectImg } from "../Assets";
import { Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";
import PostedJobs from "./PostedJobs";
const ProfileDetails = ({ meData, userMode,employerViewProfile }) => {
  console.log(meData);
  return userMode === AuthService.FREELANCER_MODE || employerViewProfile ? (
    <div className="flex flex-col sm:space-y-20  space-y-5 sm:w-[600px] text-white leading-normal ml-3">
      <div className="flex flex-col  space-y-4">
        <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold pl-2">Description</p>
        <p className=" sm:text-xl font-GeneralSans font-normal p-3">{meData.description}</p>
      </div>

      <div className="flex justify-between px-6">
        <div className=" space-y-4">
          <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold">Skills</p>
          <ul className="sm:text-xl font-GeneralSans font-normal list-disc list-inside">
            {meData?.skills?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className=" space-y-4">
          <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold">Spoken Languages</p>
          <ul className="sm:text-xl font-GeneralSans font-normal list-disc list-inside">
            {meData?.languages?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="">
        <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold">Ongoing Work/ Portfolio</p>
        <div className="flex space-x-3 py-6">
          <Link to="/freelancerProjectGallery">
            <img className="sm:h-40 sm:w-40 w-20 h-20" src={projectImg} alt="project img" />
          </Link>
          <Link to="/freelancerProjectGallery">
            <img className="sm:h-40 sm:w-40 w-20 h-20" src={projectImg} alt="project img" />
          </Link>
          <Link to="/freelancerProjectGallery">
            <img className="sm:h-40 sm:w-40 w-20 h-20" src={projectImg} alt="project img" />
          </Link>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex flex-col sm:space-y-20  space-y-5 sm:w-[600px] text-white leading-normal ml-3">
      <div className="flex flex-col  space-y-4">
        <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold pl-2">Description</p>
        <p className=" sm:text-xl font-GeneralSans font-normal p-3">{meData.description}</p>

        {meData["company"] ? (
          <div className="flex flex-col space-y-2">
            <p className="sm:text-2xl text-xl font-spaceGrotesk font-bold">{meData["company"]}</p>
            <p className="sm:text-xl text-sm font-GeneralSans font-normal">{meData["company_description"]}</p>
          </div>
        ) : (
          <></>
        )}
        <div className="lg:w-[920px] pt-5">
        <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold pl-2">Posted Jobs</p>
        <PostedJobs/>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
