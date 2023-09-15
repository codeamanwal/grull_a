/* eslint-disable */
import React from 'react';
import {projectImg} from '../Assets';
import {Link} from 'react-router-dom';

const ProfileDetails = ({description}) => {
  return (
    <div className="flex flex-col sm:space-y-20  space-y-5 sm:w-[600px] text-white leading-normal ml-3">
      <div className="flex flex-col  space-y-4">
        <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold pl-2">
          Description
        </p>
        <p className=" sm:text-xl font-GeneralSans font-normal p-3">
          {description}
        </p>
      </div>

      <div className="flex justify-between px-6">
        <div className=" space-y-4">
          <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold">
            Skills
          </p>
          <ul className="sm:text-xl font-GeneralSans font-normal list-disc list-inside">
            <li>Graphic Design</li>
            <li>UI/UX</li>
            <li>Motion graphics</li>
            <li>Research</li>
          </ul>
        </div>
        <div className=" space-y-4">
          <p className="sm:text-2xl text-lg font-spaceGrotesk font-bold">
            Languages
          </p>
          <div className="sm:text-xl font-GeneralSans font-normal">
            <p>English</p>
            <p> Hindi</p>
            <p>French</p>
          </div>
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
