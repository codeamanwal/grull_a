/* eslint-disable */
import React,{useState} from 'react';
import PropTypes from 'prop-types';
import {youtube, twitter, facebook2, editIcon} from '../Assets';

const EditProfileCard = ({
  isEmployerProfile,
      userProfileImg,
        userName,
        profession
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(userName);
  const [editedProfession, setEditedProfession] = useState(profession);
  const toHire = false;

  console.log(userName, "editedName in card");

  const handleEditClick = () => {
    setIsEditing(!isEditing); // Toggle the isEditing state
  };

  const handleSaveClick = () => {
    // Handle saving changes, e.g., send editedName and editedProfession to the server
    setIsEditing(false); // Turn off editing mode
  };

  return (
    <div className="flex px-2 py-2 text-white">
      <div className="flex flex-col items-center space-y-6 xl:space-y-6 bg-[#482773] rounded-lg lg:mt-0 xl:p-10 m-4 mx-auto py-8 px-2">
      {isEmployerProfile ? (
  <>
    <button
          className="" style={{ marginLeft: '14rem'}}
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
          className="" style={{ marginLeft: '11rem' }}
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
    userName // Display the editedName state when editing is off
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
    editedProfession
  )}
</div>

        {/* border */}
        <div className="border-b-2 border-gray-300 w-64 m-2"></div>

        <div className="text-sm sm:text-base font-GeneralSans font-normal">
          Bengaluru, India
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
                        <div className="text-base font-GeneralSans">300USD</div>
                      </div>

                      {/* no. of projects */}
                      <div className="flex justify-center items-center w-64 gap-x-1">
                        <p className="font-semibold text-lg font-GeneralSans">
                No. of Jobs Posted:
                        </p>
                        {isEditing ? (
                                <input
                                  placeholder=""
                                  type="number"
                                  className="rounded-md text-center w-20 h-8 px-2 text-white text-base bg-[#B27EE3] bg-opacity-30"
                                />
                            ) : (
                                <div className="rounded-md text-center w-20 h-8 px-2 text-white text-base bg-[#B27EE3] bg-opacity-30 font-GeneralSans">
                  50
                                </div>
                            )}
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
                30USD/Per Hour
                        </div>
                      </div>

                      {/* no. of projects */}
                      <div className="flex justify-center items-center w-64 gap-x-1">
                        <p className="font-semibold sm:text-lg font-GeneralSans">
                No. of Projects Completed:
                        </p>
                        {isEditing ? (
                                <input
                                  placeholder=""
                                  type="number"
                                  className="rounded-md text-center w-20 h-8 px-2 text-white text-base bg-[#B27EE3] bg-opacity-30"
                                />
                            ) : (
                                <div className="rounded-md text-center w-20 h-8 px-2 text-white text-base bg-[#B27EE3] bg-opacity-30 font-GeneralSans">
                  5
                                </div>
                            )}
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
  userProfileImg: PropTypes.string,
  toHire: PropTypes.bool,
  isEmployerProfile: PropTypes.bool,
  userName: PropTypes.string,
  profession: PropTypes.string,
};

export default EditProfileCard;
