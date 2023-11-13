/* eslint-disable */
import React, {useState} from 'react';
import {userProfile, youtube, twitter, facebook2} from '../Assets';
import { Select } from 'antd';


// eslint-disable-next-line react/prop-types
const ProfileCard = ({ profileName, profileRole, onProfileChange }) => {
  const [name, setName] = useState(profileName || '');
  const [role, setRole] = useState(profileRole || 'Programmer');

  const handleNameChange = (e) => {
    setName(e.target.value);
    onProfileChange(e.target.value, role);
  };
  const dropdown = [
    {key:'Graphic Designer',value:"GRAPHIC_DESIGNER"},{key:'Illustrator',value:"ILLUSTRATOR"},{key:'Programmer',value:"PROGRAMMER"},{key:'Video Editor',value:'VIDEO_EDITOR'},{key:'3d artist',value:'THREE_D_ARTIST'},{key:'Product Designer',value:'PRODUCT_DESIGNER'}
  ]
  // Function to handle input changes and update state
  const handleRoleChange = (e) => {
    setRole(e);
    console.log(e)
    onProfileChange(name, e);
  };

  return (
    <div className="flex items-center justify-center ">
      <div className="flex flex-col items-center space-y-4 xl:space-y-6 bg-[#482773] rounded-lg lg:mt-0 xl:p-8 m-4 px-2 py-6">
        <img
          className="mx-auto rounded-full h-32 w-32 md:h-72 md:w-72"
          src={userProfile}
          alt="author avatar"
        />
        <input
          placeholder="Enter Name"
          type="text"
          value={name}
          onChange={handleNameChange}
          className="rounded-md text-center w-56 h-8 text-white text-base bg-[#B27EE3] bg-opacity-30"
        />
          <Select
      placeholder="Select a role"
      style={{ width: 200 }}
      value={role}
      onChange={handleRoleChange}
    >
      {dropdown.map((item) => (
        <Option key={item.value} value={item.value}>
          {item.key}
        </Option>
      ))}
    </Select>
        <div className="border-b-2 border-gray-300 w-64 m-2"></div>

        <input
          placeholder="Location"
          type="text"
          className="rounded-md text-center w-36 h-8 px-2  text-white text-base bg-[#B27EE3] bg-opacity-30"
        />

        {/* border */}
        <div className=" border-b-2 border-gray-300 w-64 m-2"></div>

        <div className="flex flex-col justify-start items-center space-y-3">
          {/* ave rate usd */}
          <div className="flex gap-x-20 justify-center items-center ">
            <p className="font-semibold text-xl text-white">Avg. Rate:</p>
            <input
              placeholder="USD"
              type="number"
              className="rounded-md text-center w-20 h-8  px-2  text-white text-base bg-[#B27EE3] bg-opacity-30"
            />
          </div>

          {/* no. of projects */}
          <div className="flex  justify-center items-center w-64 gap-x-1">
            <p className="font-semibold text-xl text-white">
              No. of Projects Completed:
            </p>
            <input
              placeholder=""
              type="number"
              className="rounded-md text-center w-20 h-8  px-2  text-white text-base bg-[#B27EE3] bg-opacity-30"
            />
          </div>
        </div>

        {/* border */}
        <div className="border-b-2 border-gray-300 w-64 m-2"></div>

        <div className="">
          <div className="flex flex-col justify-center items-center space-y-3 text-lg font-medium leading-6">
            <div className="flex justify-center space-x-5">
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full p-2 bg-white"
              >
                <span className="sr-only">Facebook</span>
                <img src={facebook2} alt="facebook" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full p-2 bg-white"
              >
                <span className="sr-only">GitHub</span>
                <img src={youtube} alt="youtube" />
              </a>
              <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full p-2 bg-white"
              >
                <span className="sr-only">Twitter</span>
                <img src={twitter} alt="twitter" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
