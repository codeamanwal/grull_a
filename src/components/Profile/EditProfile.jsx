/* eslint-disable */
import React, {useState, useEffect} from 'react';
import EditProfileCard from './EditProfileCard';
import ProfileDetails from './ProfileDetails';
import AuthService from '../../Services/AuthService';
import fetchMeData from '../../Services/User';
import FreelancerEmptyProfile from '../FreelancerEmptyProfile/FreelancerEmptyProfile';

const EditProfile = ({userMode, setUserMode}) => {
  const [meData, setMeData] = useState({});
  const [profileEditMode, setProfileEditMode] = useState(false);

  useEffect(() => {
    fetchMeData()
        .then((fetchedData) => {
          setMeData(fetchedData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  }, []);

  const handleUserModeChange = () => {
    AuthService.toggleUserMode();
    setUserMode(AuthService.getUserMode());
  };
  return (
    <div className="flex flex-col md:flex-row justify-center md:space-x-20 bg-[#1A0142] 2xl:h-[913px] pt-10">
      {!profileEditMode?<>
        <EditProfileCard
          isEmployerProfile={userMode === AuthService.EMPLOYER_MODE}
          userMode={userMode}
          meData={meData}
          setProfileEditMode={()=>setProfileEditMode(true)}
        />
        <ProfileDetails
          meData={meData}
          userMode={userMode}
        />
      </>:
      <>
        <FreelancerEmptyProfile userData={meData} setUserData={setMeData} editingDisable={()=>setProfileEditMode(false)} editProfile={true} profileImg={`https://ui-avatars.com/api/?name=${meData['first_name']}+${meData['last_name']}`}/>
      </>}

      <div className="flex flex-col items-center  sm:space-y-10 text-white space-x-4 pt-8">
        <div className="flex flex-col space-y-4   font-spaceGrotesk font-semibold text-xl">
          <button className="sm:px-8 sm:py-4  text-center p-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
            {AuthService.isFreelancer() ? 'Find Jobs': 'Manage Jobs'}
          </button>
          <p onClick={handleUserModeChange} className="text-purple-600 text-base font-spaceGrotesk font-medium ">
            {AuthService.isFreelancer() ? 'SWITCH TO EMPLOYER' : 'SWITCH TO FREELANCER'}
          </p>
        </div>
      </div>

    </div>


  );
};


export default EditProfile;
