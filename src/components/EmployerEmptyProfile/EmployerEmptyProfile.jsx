/* eslint-disable */
import React from "react";
import ProfileCard from "../FreelancerEmptyProfile/ProfileCard";
import { plus, upArrow } from "../Assets";
import { useState } from "react";
import config from "react-global-configuration";
import { useNavigate, Link } from "react-router-dom";

const EmployerEmptyProfile = () => {
  const [skills, setSkills] = useState([""]);
  const [languages, setLanguages] = useState([""]);
  const [images, setImages] = useState([null]);
  const [description, setDescription] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const navigate = useNavigate();


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
      <ProfileCard
        profileName={firstName} // Pass the firstName state as prop
        profileRole={lastName} // Pass the lastName state as prop
        onProfileChange={handleProfileChange}
      />

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
