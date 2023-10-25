/* eslint-disable */
import React from "react";
import ProfileCard from "../FreelancerEmptyProfile/ProfileCard";
import { plus, upArrow } from "../Assets";
import { useState } from "react";
import config from "react-global-configuration";
import { useNavigate, Link } from "react-router-dom";
import EditProfileCard from "../Profile/EditProfileCard";
import {hrProfile} from '../../components/Assets';

const EmployerEmptyProfile = () => {
  const [skills, setSkills] = useState([""]);
  const [languages, setLanguages] = useState([""]);
  const [images, setImages] = useState([null]);
  const [description, setDescription] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  // const [editedName, setEditedName] = useState(userName);
  // const [editedProfession, setEditedProfession] = useState(profession);
  const toHire = false;


  const handleProfileChange = (newName, newRole) => {
    setFirstName(newName); // Update firstName state
    setLastName(newRole); // Update lastName state
  };

  // const handleSubmit = async () => {
  //   try {
  //     const payload = {
  //       password: "staticPassword",
  //       first_name: firstName,
  //       last_name: lastName,
  //       description: description,
  //       list_as_freelancer: true,
  //     };

  //     console.log("First name from query:", firstName); // Corrected from newName
  //     console.log("Last name from query:", lastName);

  //     const accessToken = localStorage.getItem("access_token");

  //     // Perform the API call
  //     const response = await fetch(`${config.get("BACKEND_URL")}/api/v0/users/me`, {
  //       method: "PATCH",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${accessToken}`,
  //       },
  //       body: JSON.stringify(payload), // Convert payload to JSON
  //     });

  //     console.log("firstname for edit profile", firstName),
  //     navigate("/editProfile", {
        
  //       state: {
  //         firstName,
  //         lastName,
  //         description,
  //         list_as_freelancer,
  //       },
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! Status: ${response.status}`);
  //     }
  //   } catch (error) {
  //     console.error("Error occurred:", error);
  //   }
  // };

  const handleChange = (index, event, field) => {
    if (field === "skills") {
      const updatedSkills = [...skills];
      updatedSkills[index] = event.target.value;
      setSkills(updatedSkills);
    } else if (field === "languages") {
      const updatedLanguages = [...languages];
      updatedLanguages[index] = event.target.value;
      setLanguages(updatedLanguages);
    }
  };

  const handleAddField = field => {
    if (field === "skills") {
      setSkills([...skills, ""]);
    } else if (field === "languages") {
      setLanguages([...languages, ""]);
    }
  };

  const handleImageUpload = index => event => {
    const file = event.target.files[0];
    const updatedImages = [...images];
    updatedImages[index] = URL.createObjectURL(file);
    setImages(updatedImages);
  };

  return (
    <div className="flex flex-wrap bg-[#1A0142] sm:w-3/4 sm:mx-auto  text-white 2xl:h-[913px] p-10">
      <div className="flex px-2 py-2 text-white">
      <div className="flex flex-col items-center space-y-6 xl:space-y-6 bg-[#482773] rounded-lg lg:mt-0 xl:p-10 m-4 mx-auto py-8 px-2">
  
  <>
        <img
          className="mx-auto rounded-full sm:h-64 sm:w-64 w-32 h-32"
          src={hrProfile}
          alt="author avatar"
        />
  </>


      
          <div className="text-center font-bold text-2xl font-spaceGrotesk">
    <input
      placeholder="Enter Name"
      type="text"
      // value={editedName}
      className="rounded-md text-center w-56 h-8 text-white text-base bg-[#B27EE3] bg-opacity-30"
    />
</div>


       
        <div className="text-xl font-GeneralSans font-normal">
    <input
      placeholder="Enter Profession"
      type="text"
      // value={editedProfession}
      className="rounded-md text-center w-56 h-8 text-white text-base bg-[#B27EE3] bg-opacity-30"
    />
</div>

        {/* border */}
        <div className="border-b-2 border-gray-300 w-64 m-2"></div>

        <div className="text-sm sm:text-base font-GeneralSans font-normal">
        <input
      placeholder="Enter Location"
      type="text"
      className="rounded-md text-center w-56 h-8 text-white text-base bg-[#B27EE3] bg-opacity-30"
    />
        </div>

        {/* border */}
        <div className="border-b-2 border-gray-300 w-64 m-2"></div>

                    <div className="flex flex-col justify-start items-center space-y-2">
                      {/* ave rate usd */}
                      <div className="flex gap-x-20 justify-center items-center">
                        <p className="font-semibold text-lg font-GeneralSans">
                Avg. Budget:
                        </p>
                        <div className="text-base font-GeneralSans"><input
      placeholder="Enter Budget"
      className="rounded-md text-center w-32 h-8 text-white text-base bg-[#B27EE3] bg-opacity-30"
    /></div>
                      </div>

                      {/* no. of projects */}
                      <div className="flex justify-center items-center gap-x-3">
                        <p className="font-semibold text-lg font-GeneralSans mr-3">
                No. of Jobs Posted:
                        </p>
                                <div className="text-base font-GeneralSans">
                                <input
      placeholder="Posted Jobs"
      className="rounded-md text-center w-32 h-8 text-white text-base bg-[#B27EE3] bg-opacity-30"
    />
                                </div>
                      </div>
                    </div>

                    <>
                      {/* border */}
                      <div className="border-b-2 border-gray-300 w-64 m-2"></div>
                      <div className="flex flex-col space-y-2">
                        <p>Learn more</p>
                      </div>
                    </>
      </div>
    </div>

      {/* form */}
      <div className="p-6 space-y-6 flex-grow">
        <div className="grid  grid-cols-1 sm:grid-cols-4 gap-8 sm:w-3/4 mx-auto">
          <div className="sm:col-span-4">
            <label htmlFor="description" className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4">
              Description
            </label>
            <textarea
              id="description"
              rows="4"
              className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg  sm:text-sm block w-full p-4"
              placeholder="Write about you..."
              value={description}
              onChange={event => setDescription(event.target.value)}></textarea>
          </div>
          <div className="sm:col-span-4">
            <label htmlFor="description" className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4">
              About Company
            </label>
            <textarea
              id="description"
              rows="4"
              className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg  sm:text-sm block w-full p-4"
              placeholder="Write about the company"
              value={description}
              onChange={event => setDescription(event.target.value)}></textarea>
          </div>
  

          <div className="col-span-full">
            <label htmlFor="portfolio" className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4">
              Reference Files About Work
            </label>
            <div className="flex items-center">
              {images.map((image, index) => (
                <label key={index} htmlFor={`image-${index}`} className="mr-2 cursor-pointer">
                  <img src={image ? image : upArrow} alt={`Portfolio ${index + 1}`} className="sm:w-44 sm:h-44 object-fit rounded-md border border-solid border-purple-500 p-2" />
                </label>
              ))}
              <input type="file" accept="image/*" id={`image-${images.length - 1}`} onChange={handleImageUpload(images.length - 1)} className="hidden" />
              <button type="button" onClick={() => setImages([...images, null])} className="text-white rounded-full p-2">
                <img src={plus} alt="plus" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-10 pl-10">
        <Link to="/employerProfile" className="text-white text-xl font-medium py-2 px-16 rounded shadow bg-gradient-to-l from-purple-400 to-transparent" onClick={() => handleSubmit(firstName, lastName)}>
          DONE
        </Link>
        {/* <a href='/EditProfilePage'
          className="text-white text-xl font-medium py-2 px-16 rounded shadow bg-gradient-to-l from-purple-400 to-transparent"
          onClick={() => handleSubmit(firstName, lastName)}
        >
          DONE
        </a> */}

    
      </div>
    </div>
  );
};

export default EmployerEmptyProfile;
