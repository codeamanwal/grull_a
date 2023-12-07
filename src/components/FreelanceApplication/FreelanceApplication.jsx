/* eslint-disable */
import React, {useEffect, useState} from 'react';
import config from 'react-global-configuration';
import AuthService from '../../Services/AuthService';
import { Form, Select, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import { openNotificationWithIcon } from '../../utils/openNotificationWithIcon';
const { Option } = Select;
const FreelanceApplication = ({job}) => {
  const [rate, setRate] = useState('');
  const [isApplying, setIsApplying] = useState('');
  const [proposal,setProposal] = useState('');
  const [urls,setSelectedUrls] = useState();
  const navigate = useNavigate();
  var validUrls = [];
  const urlRegex = /^(?:(?:https?|ftp):)?\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?(?:[/?#]\S)?$/;
  const handleUrlChange=(selectedItems)=>{
    validUrls = selectedItems.filter(validateUrl);
    setSelectedUrls(validUrls)
  };
  useEffect(()=>{
    setSelectedUrls(validUrls);
  },[])
  const validateUrl = (value) => {
    return urlRegex.test(value);
  };
  var accessToken = AuthService.getToken();
  const handleApplyClick = async () => {
    setIsApplying(true);
    const jobId = job.jobData.id
    try {
      const response = await fetch(`${config.get('BACKEND_URL')}/api/v0/jobs/${jobId}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
        body: JSON.stringify({
          proposal: proposal,
          proposed_rate: parseInt(rate),
        }),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      openNotificationWithIcon('success','Proposal sent successfully')
      navigate('/my-profile')
      setIsApplying(false);
      nav
    } catch (error) {
      console.error('Error occurred:', error);
      setIsApplying(false); // Reset the applying state to false if there's an error
    }
  };
  

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles(uploadedFiles);
  };

  const handleRateChange = (event) => {
    setRate(event.target.value);
  };

  return (
    <div className="text-white leading-normal px-2 py-6 w-full">
      <h1 className="text-center sm:text-4xl text-2xl font-spaceGrotesk font-medium mb-8">
        PROPOSAL
      </h1>
      <div className="flex flex-wrap justify-between w-full sm:w-3/4 mx-auto">
        <div className="grid sm:grid-cols-6 gap-4 space-y-8 w-full sm:w-1/2">
          <div className="col-span-full">
            <label
              htmlFor="description"
              className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4"
            >
              Why are you fit for this job?
            </label>

            {window.innerWidth <= 640 ? (
                            <textarea
                              id="description"
                              rows="4"
                              className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-white sm:text-sm p-4 w-full"
                              placeholder="Enter answer here"
                              onChange={(e)=>setProposal(e.target.value)}
                            ></textarea>
                        ) : (
                            <textarea
                              id="description"
                              rows="6"
                              className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-white sm:text-sm p-4 w-full"
                              placeholder="Enter answer here"
                              onChange={(e)=>setProposal(e.target.value)}
                            ></textarea>
                        )}
          </div>

          <div className="col-span-full">
            <label
              htmlFor="files"
              className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4"
            >
              Any files to support your proposal
            </label>
            <Form.Item
          name="files"
          rules={[{ required: true, message: "Please enter urls" }, { pattern:urlRegex,message:'Please enter a valid url' }]}
          className="sm:col-span-4 flex flex-col space-y-2 justify-center text-white"
          initialValue={[]}
        >
            <Select
        mode="tags"
        placeholder="Enter Urls"
        onChange={handleUrlChange}
        value={urls}
        tokenSeparators={[',']}
        className="bg-[#1A0142] border border-solid border-[#B1B1B1]  rounded-lg text-gray-900 sm:text-sm sm:p-3 p-2 sm:w-full postjobsselect text-white"
      >
        {urls?.map((tag, index) => (
          <Option key={index} value={tag} onClose={() => handleChange(urls.filter(item => item !== tag))} >
          
              {tag}
          
          </Option>
        ))}
      </Select>
      <Typography className='mb-0 pb-0 text-white'> eg - 'https://www.google.com'</Typography>
      </Form.Item>
            {/* <div className="flex items-center">
              <label
                htmlFor="file-upload"
                className="flex  p-2 h-10 border border-solid border-purple-500 rounded-md cursor-pointer w-full"
              >
                Upload
              </label>
              <input
                type="file"
                id="file-upload"
                onChange={handleFileUpload}
                className="hidden"
              />
            </div> */}
          </div>

          <div className="col-span-full">
            <label
              htmlFor="rate"
              className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4"
            >
              What is your proposed rate?
            </label>
            <div className="grid grid-cols-8 gap-4">
              <div className="col-span-2">
                <div className="flex items-center">
                <select
                    id="currency"
                    className="p-2 bg-white border border-solid border-gray-300 rounded w-full text-black"
                  >
                    <option value="USD">INR</option>
                    {/* <option value="EUR">EUR</option> */}
                    {/* Add more currency options here */}
                  </select>
                </div>
              </div>
              <div className="col-span-2">
                <div className="flex items-center">
                <input
                    type="number"
                    id="rate"
                    value={rate}
                    onChange={handleRateChange}
                    className="p-2 bg-white border border-solid border-gray-300 rounded w-full text-black"
                    placeholder="INR"
                  />       
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex sm:flex-col flex-wrap justify-between items-center space-x-6 space-y-6 sm:space-y-8 mt-10">
          <div className="text-purple-500 text-xl font-GeneralSans font-medium space-y-2">
            <p className="text-center">Review Profile</p>
            <p className="text-center">View Job Requirements</p>
          </div>

          <div>
            <button
              className={`text-white w-1/2 m-4 sm:w-full text-center sm:text-xl font-medium md:px-8 py-2 px-4 rounded shadow ${
      isApplying ? 'bg-gray-400' : 'bg-gradient-to-l from-purple-400 to-transparent'
              }`}
              onClick={handleApplyClick}
              disabled={isApplying} // Disable the button when the API call is in progress
            >
              {isApplying ? 'APPLYING...' : 'APPLY'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreelanceApplication;
