import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {youtube, twitter, facebook2, editIcon} from '../Assets';

const EditProfileCard = ({
  isEmployerProfile, meData, setProfileEditMode,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState('');
  const [editedProfession, setEditedProfession] = useState('');
  const toHire = false;
  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle the isEditing state
    if (setProfileEditMode) {
      setProfileEditMode();
    }
  };

  const userLocation = meData['location'] ? `${meData['location']['city']}, ${meData['location']['state']}`: '';
  const userProfileImg = `https://ui-avatars.com/api/?name=${meData['first_name']}+${meData['last_name'] || ''}`;

  return (
    <div className="flex px-2 py-2 text-white">
      <div className="flex flex-col items-center space-y-6 xl:space-y-6 bg-[#482773] rounded-lg lg:mt-0 xl:p-10 m-4 mx-auto py-8 px-2">
        {isEmployerProfile ? (
  <>
    <button
      className="" style={{marginLeft: '14rem'}}
      onClick={handleEditClick}
    >
      <img src={editIcon} alt="Edit" />
    </button>
    <img
      className="mx-auto rounded-full sm:h-64 sm:w-64 w-32 h-32"
      src={userProfileImg}
      alt="author avatar"
    />
  </>
) : (
  <>
    <button
      className="" style={{marginLeft: '11rem'}}
      onClick={handleEditClick}
    >
      <img src={editIcon} alt="Edit" />
    </button>
    <img
      className="mx-auto rounded-full sm:h-64 sm:w-64 w-32 h-32"
      src={userProfileImg}
      alt="author avatar"
    />
  </>
)}


        <div className="text-center font-bold text-2xl font-spaceGrotesk">
          {isEditing ? (
    <input
      placeholder="Enter Name"
      type="text"
      value={editedName}
      onChange={(e) => setEditedName(e.target.value)}
      className="rounded-md text-center w-56 h-8 text-white text-base bg-[#B27EE3] bg-opacity-30"
    />
  ) : (
    meData['full_name'] // Display the editedName state when editing is off
  )}
        </div>


        <div className="text-xl font-GeneralSans font-normal">
          {isEditing ? (
    <input
      placeholder="Enter Profession"
      type="text"
      value={editedProfession}
      onChange={(e) => setEditedProfession(e.target.value)}
      className="rounded-md text-center w-56 h-8 text-white text-base bg-[#B27EE3] bg-opacity-30"
    />
  ) : (
    meData['role']
  )}
        </div>

        {/* border */}
        <div className="border-b-2 border-gray-300 w-64 m-2"></div>

        <div className="text-sm sm:text-base font-GeneralSans font-normal">
          {userLocation}
        </div>

        {/* border */}
        <div className="border-b-2 border-gray-300 w-64 m-2"></div>

        {isEmployerProfile ? (
                    <div className="flex flex-col justify-start items-center space-y-2">
                      {/* ave rate usd */}
                      <div className="flex gap-x-20 justify-center items-center">
                        <p className="font-semibold text-lg font-GeneralSans">
                Avg. Budget:
                        </p>
                        <div className="text-base font-GeneralSans">{meData.average_rate_offered}</div>
                      </div>

                      {/* no. of projects */}
                      <div className="flex justify-center items-center w-64 gap-x-1">
                        <p className="font-semibold text-lg font-GeneralSans">
                No. of Jobs Posted:
                        </p>
                        {meData.jobs_posted_count}
                      </div>
                    </div>
                ) : (
                    <div className="flex flex-col items-center space-y-3">
                      {/* ave rate usd */}
                      <div className="flex gap-x-20 justify-center items-center">
                        <p className="font-semibold sm:text-lg font-GeneralSans">
                Avg. Rate:
                        </p>
                        <div className="sm:text-base font-GeneralSans">
                          {meData.rate_per_hour}
                        </div>
                      </div>

                      {/* no. of projects */}
                      <div className="flex justify-center items-center w-64 gap-x-1">
                        <p className="font-semibold sm:text-lg font-GeneralSans">
                No. of Projects Completed:
                        </p>
                        {meData.jobs_completed_count}
                      </div>
                    </div>
                )}

        {toHire ? (
                    <>
                      {/* border */}
                      <div className="border-b-2 border-gray-300 w-64 m-2"></div>
                      <div className="flex flex-col space-y-2">
                        <p>Learn more</p>
                        <a
                          href="/freelancerProfileViewByEmployer"
                          className="text-white text-center text-xl font-medium rounded shadow bg-gradient-to-l from-purple-400 to-transparent py-2 w-full"
                        >
                HIRE
                        </a>
                      </div>
                    </>
                ) : (
                    !isEmployerProfile && (
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
                    )
                )}
      </div>
    </div>
  );
};

EditProfileCard.propTypes = {
  isEmployerProfile: PropTypes.bool,
  meData: PropTypes.object,
  setProfileEditMode: PropTypes.func,
};

export default EditProfileCard;
