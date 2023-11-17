/* eslint-disable */
import React from 'react';
import ProfileCard from './ProfileCard';
import {plus, upArrow} from '../Assets';
import {useState, useEffect} from 'react';
import config from 'react-global-configuration';
import {Link} from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import fetchMeData from '../../Services/User';

const FreelancerEmptyProfile = ({userData, setUserData, editingDisable, editProfile, profileImg}) => {
  const [skills, setSkills] = useState(userData['skills'] || []);
  const [languages, setLanguages] = useState(userData['languages'] || []);
  const [images, setImages] = useState(userData['images'] || []);
  const [description, setDescription] = useState(userData['description'] || '');
  const [fullName, setFullname] = useState(userData['fullname'] || '');
  const [role, setRole] = useState(userData['role'] || 'Programmer');
  const [location,setLocation] = useState(userData['location']||'India')
  const accessToken = AuthService.getToken();
  // console.log(userData['location'])
  useEffect(() => {
    if (userData) return;
    fetchMeData()
        .then((fetchedData) => {
          setUserData(fetchedData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  }, []);

  useEffect(
      () => {
        console.log("ME", userData);
        setFullname(userData['fullname']);
        setSkills(userData['skills']);
        setLanguages(userData['languages']);
        setDescription(userData['setDescription']);
        setRole(userData['role']);
      }, [userData],
  );


  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const [firstName, setFirstName] = useState(queryParams.get('first_name') || '');
  // const [lastName, setLastName] = useState(queryParams.get('last_name') || '');

  const handleProfileChange = (newName, newRole,newLocation) => {
    if (newName) {
      setFullname(newName);
    } // Update firstName state
    if (role) {
      setRole(newRole);
    } // Update lastName state
    if(newLocation){
      setLocation(newLocation)// Update location state
    }
  };

  const handleSubmit = async () => {
    const [firstName, ...lastNames] = (fullName || '').split(' ');
    const lastName = lastNames.join(' ');
    try {
      const payload = {
        first_name: firstName || userData['first_name'],
        last_name: lastName || userData['last_name'],
        role: role || userData['role'],
        description: description || userData['description'],
        list_as_freelancer: true,
        skills: skills || userData['skills'],
        languages: languages || userData['languages'],
        // location:location||userData['location'],
      };

      // Perform the API call
      const response = await fetch(`${config.get('BACKEND_URL')}/api/v0/users/me`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify(payload), // Convert payload to JSON
      });
      if (response.ok) {
        if (editingDisable) {
          editingDisable();
        }
        const responseData = await response.json();
        setUserData(responseData);
      } else if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  const handleChange = (index, event, field) => {
    if (field === 'skills') {
      const updatedSkills = [...skills];
      updatedSkills[index] = event.target.value;
      setSkills(updatedSkills);
    } else if (field === 'languages') {
      const updatedLanguages = [...languages];
      updatedLanguages[index] = event.target.value;
      setLanguages(updatedLanguages);
    }
  };

  const handleAddField = (field) => {
    if (field === 'skills') {
      setSkills([...skills, '']);
    } else if (field === 'languages') {
      setLanguages([...languages, '']);
    }
  };

  const handleImageUpload = (index) => (event) => {
    const file = event.target.files[0];
    const updatedImages = [...images];
    updatedImages[index] = URL.createObjectURL(file);
    setImages(updatedImages);
  };

  return (
    <div className="flex flex-wrap bg-[#1A0142] sm:w-3/4 sm:mx-auto  text-white 2xl:h-[913px] p-10">
      <ProfileCard
        profileName={fullName}
        profileRole={role}
        onProfileChange={handleProfileChange}
        profileImg={profileImg}
      profileLocation={location}
      handleSubmit={handleSubmit}
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
              onChange={(event) => setDescription(event.target.value)}></textarea>
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
                onChange={(event) => handleChange(index, event, 'skills')}
                className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-white sm:text-sm block w-full p-2.5 my-2"
                required=""
              />
            ))}
            <div className="flex items-center justify-center mt-2">
              <button type="button" onClick={() => handleAddField('skills')} className="text-white rounded-full p-2">
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
                onChange={(event) => handleChange(index, event, 'languages')}
                className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-white sm:text-sm block w-full p-2.5 my-2"
                required=""
              />
            ))}
            <div className="flex items-center justify-center mt-2">
              <button type="button" onClick={() => handleAddField('languages')} className="text-white rounded-full p-2">
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
