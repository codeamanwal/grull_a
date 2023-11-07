/* eslint-disable */
import React from 'react';
import {projectImg} from '../Assets';
import {Link} from 'react-router-dom';

const ProfileDetails = ({userData}) => {
  console.log(userData)// to correct
  return (
    <div className="flex flex-col sm:space-y-20  space-y-5 sm:w-[600px] text-white leading-normal ml-3">
      <div className="flex flex-col  space-y-4">
        <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold pl-2">
          Description
        </p>
        <p className=" sm:text-xl font-GeneralSans font-normal p-3">
          {userData.description}
        </p>
      </div>

      <div className="flex justify-between px-6">
        <div className=" space-y-4">
          <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold">
            Skills
          </p>
          <ul className="sm:text-xl font-GeneralSans font-normal list-disc list-inside">
          {userData.skills.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
          </ul>
        </div>
        <div className=" space-y-4">
        <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold">
            Languages
          </p>
          <ul className="sm:text-xl font-GeneralSans font-normal list-disc list-inside">
          {userData.languages.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
          </ul>
        </div>
      </div>

      <div className="">
        <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold">
          Ongoing Work/ Portfolio
        </p>
        <div className="flex space-x-3 py-6">
          <Link to="/freelancerProjectGallery">
            <img
              className="sm:h-40 sm:w-40 w-20 h-20"
              src={projectImg}
              alt="project img"
            />
          </Link>
          <Link to="/freelancerProjectGallery">
            <img
              className="sm:h-40 sm:w-40 w-20 h-20"
              src={projectImg}
              alt="project img"
            />
          </Link>
          <Link to="/freelancerProjectGallery">
            <img
              className="sm:h-40 sm:w-40 w-20 h-20"
              src={projectImg}
              alt="project img"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;
