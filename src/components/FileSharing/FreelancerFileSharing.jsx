import React, {useEffect, useState} from 'react';
import {star} from '../Assets';
import {useLocation} from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import {Select} from 'antd';
const {Option} = Select;
const FreelancerFileSharing = () => {
  const location = useLocation();
  const urlRegex =
    /^(?:(?:https?|ftp):)?\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?(?:[/?#]\S)?$/;
  const [completedmilestones, setCompletedMilestones] = useState(0);
  console.log(location.state);
  const [urls, setSelectedUrls] = useState();
  let validUrls = [];
  const handleUrlChange = (selectedItems) => {
    validUrls = selectedItems.filter(validateUrl);
    setSelectedUrls(validUrls);
  };
  useEffect(() => {
    setSelectedUrls(validUrls);
  }, []);
  const validateUrl = (value) => {
    return urlRegex.test(value);
  };
  const isFreelancer = AuthService.isFreelancer();
  console.log(isFreelancer);
  const stars = Array(5).fill(<img src={star} className="sm:w-15 sm:h-15 w-10 h-10" alt="star" />);
  useEffect(() => {
    setCompletedMilestones(4);
  }, []);
  // const approvePayout=()=> {
  //   const requestData={
  //      amount:1000,
  //   }
  //   const response = axiosPost(`/api/v0/users/${user_id}/send-money`,requestData)
  //   if(response){
  //     ('/my-profile')
  //   }


  // } catch (error) {
  //   console.error("Error occurred:", error);
  // }
  // };
  function addMilestones() {
    const milestones = [];
    for (let i = 1; i <= completedmilestones; i++) {
      milestones.push(
          <div key={i} className="flex  flex-wrap items-center justify-center space-y-3 font-GeneralSans w-full sm:w-5/6">
            <p className="sm:w-1/4 sm:text-xl text-sm font-semibold">Milestone {i}</p>
            <div className="flex justify-between space-x-2 sm:space-x-10 w-full sm:w-3/4">
              <button className="bg-purple-900 bg-opacity-70 border border-solid text-sm border-purple-500 rounded-lg text-purple-500  sm:p-4 w-full sm:w-1/3">
                {isFreelancer ? 'Upload Urls' : 'Download Urls'}
              </button>
              <Select
                mode="tags"
                placeholder="Enter Urls"
                onChange={handleUrlChange}
                value={urls}
                tokenSeparators={[',']}
                className="bg-[#1A0142] border border-solid border-[#B1B1B1]  rounded-lg text-gray-900 sm:text-sm sm:p-3 p-2 sm:w-full postjobsselect text-white">
                {urls?.map((tag, index) => (
                  <Option key={index} value={tag} onClose={() => handleUrlChange(urls.filter((item) => item !== tag))}>
                    {tag}
                  </Option>
                ))}
              </Select>

              <button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/3">{!isFreelancer ? 'Add Comments' : 'Review Comments'}</button>
              <button className="bg-purple-500 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/3">{isFreelancer ? 'Request for approval' : 'Approve'}</button>
            </div>
            <div className="flex flex-row-reverse font-GeneralSans w-full py-5">
              <button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/4">
                {isFreelancer ? 'Request for milestone' : 'Release Payment'}
              </button>
            </div>
          </div>,
      );
    }
    return milestones;
  }
  return (
    <div className="flex text-white flex-wrap  sm:w-full  justify-center  overflow-x-hidden">
      <div className="flex-col flex-wrap space-y-6 pt-20 font-semibold justify-start text-white hidden sm:flex"></div>

      {/* <div className="sm:hidden flex flex-row space-x-2 sm:pt-20 pt-10 font-semibold justify-start sm:pl-16 text-white">
        <button className="flex-grow bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-4">
          Job Details
        </button>
        <button className="flex-grow bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-4">
          Bid Details
        </button>
        <button className="flex-grow bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-4">
          Files
        </button>
        <button className="flex-grow bg-purple-900 bg-opacity-70 rounded-lg border border-purple-600 p-4">
          Reviews
        </button>
      </div> */}

      <div className="flex flex-col flex-wrap text-white sm:space-y-7 sm:space-x-7 sm:pt-20 sm:w-3/4 w-full p-1 py-10">
        <div>
          <h2 className="text-2xl font-spaceGrotesk font-semibold pb-4">PROGRESS TRACKER</h2>
          <div className="h-10 flex-shrink-0 border border-solid border-purple-500 rounded-lg bg-purple-300 relative">
            <div className="bg-green-500 rounded-lg absolute top-0 left-0 bottom-0" style={{width: '0%'}}></div>
          </div>
          <div className="flex flex-row justify-between text-white sm:text-base text-sm font-GeneralSans sm:leading-24 pt-4 sm:w-4/5 w-1/2 sm:space-x-4 space-x-5 ">
            <p>1st Milestone</p>
            <p>2nd Milestone</p>
            <p>3rd Milestone</p>
            <p>4th Milestone</p>
          </div>
        </div>
        <div className="flex flex-col flex-wrap sm:space-y-10 space-y-6 sm:pt-16 py-10 sm:py-3">
          <p className="text-2xl font-spaceGrotesk font-semibold py-3">Job Title - {location?.state?.jobData?.title}</p>
        </div>
        <div className="flex justify-center flex-col items-center">{addMilestones()}</div>
        <div className="flex flex-col text-white pb-10">
          <p className="text-2xl font-spaceGrotesk font-semibold pb-4">Rate your work experience</p>
          <div className="flex space-x-1">{stars}</div>
        </div>

        <div className="flex  justify-between w-7/8 font-spaceGrotesk font-medium">
          <div className="flex flex-col sm:w-1/2">
            <p className=" text-2xl pb-4 font-semibold">Write a review about your work experience</p>
            <textarea type="text" className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-white sm:text-sm  h-32 w-full p-4" />
          </div>
          <div className="flex flex-wrap flex-col justify-end w-1/3 p-1">
            <button className="md:px-8 p-2 sm:w-3/4 h-12  text-xl rounded shadow bg-gradient-to-l from-purple-400 to-transparent">MARK AS DONE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelancerFileSharing;
