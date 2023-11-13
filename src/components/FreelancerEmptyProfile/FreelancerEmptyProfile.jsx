/* eslint-disable */
import React from "react";
import ProfileCard from "./ProfileCard";
import { plus, upArrow } from "../Assets";
import { useState } from "react";
import config from "react-global-configuration";
import { useNavigate, Link } from "react-router-dom";
import AuthService from "../../Services/AuthService";

const FreelancerEmptyProfile = ({editingDisable,editProfile}) => {
  const [skills, setSkills] = useState([""]);
  const [languages, setLanguages] = useState([""]);
  const [images, setImages] = useState([null]);
  const [description, setDescription] = useState("");
  const [firstName, setFirstName] = useState("");
  const [role,setRole] = useState('');
  const navigate = useNavigate();

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const [firstName, setFirstName] = useState(queryParams.get('first_name') || '');
  // const [lastName, setLastName] = useState(queryParams.get('last_name') || '');

  const handleProfileChange = (newName, newRole) => {
    setFirstName(newName); // Update firstName state
    setRole(newRole); // Update lastName state
  };

  const handleSubmit = async () => {
    try {
      const payload = {
        full_name: firstName,
        role: role,
        description: description,
        list_as_freelancer: true,
        skills,
        languages,
       // images//to add
      };

      const accessToken = AuthService.getToken();

      // Perform the API call
      const response = await fetch(`${config.get("BACKEND_URL")}/api/v0/users/me`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload), // Convert payload to JSON
      });
      if(response.ok){
      if(editingDisable){
        editingDisable();
      }
      navigate("/editProfile", {
        state: {
          firstName,
          role,
          description,
          list_as_freelancer,
          skills,
          languages
        },
      });
    }
      else if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

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
        profileRole={role} // Pass the lastName state as prop
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

          <div className="sm:col-span-2">
            <label htmlFor="skills" className="font-semibold block mb-2 text-xl font-spaceGrotesk">
              Skills
            </label>
            {skills?.map((skill, index) => (
              <input
                key={index}
                type="text"
                name="skills"
                id={`skill-${index}`}
                value={skill}
                onChange={event => handleChange(index, event, "skills")}
                className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-white sm:text-sm block w-full p-2.5 my-2"
                required=""
              />
            ))}
            <div className="flex items-center justify-center mt-2">
              <button type="button" onClick={() => handleAddField("skills")} className="text-white rounded-full p-2">
                <img src={plus} alt="plus" />
              </button>
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="languages" className="font-semibold block mb-2 text-xl font-spaceGrotesk">
              Spoken Languages
            </label>
            {languages?.map((language, index) => (
              <input
                key={index}
                type="text"
                name="languages"
                id={`language-${index}`}
                value={language}
                onChange={event => handleChange(index, event, "languages")}
                className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-white sm:text-sm block w-full p-2.5 my-2"
                required=""
              />
            ))}
            <div className="flex items-center justify-center mt-2">
              <button type="button" onClick={() => handleAddField("languages")} className="text-white rounded-full p-2">
                <img src={plus} alt="plus" />
              </button>
            </div>
          </div>

          <div className="col-span-full">
            <label htmlFor="portfolio" className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4">
              Ongoing Work/ Portfolio
            </label>
            <div className="flex items-center">
              {images?.map((image, index) => (
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
        <Link to="/editProfile" className="text-white text-xl font-medium py-2 px-16 rounded shadow bg-gradient-to-l from-purple-400 to-transparent" onClick={handleSubmit}>
          DONE
        </Link>
        {!editProfile&&<p className="text-[#B27EE3] text-lg font-medium font-spaceGrotesk pt-8">SWITCH TO AN EMPLOYER</p>}
      </div>
    </div>
  );
};

export default FreelancerEmptyProfile;
