/* eslint-disable */
import React, {useState} from 'react';
import config from 'react-global-configuration';
import AuthService from '../../Services/AuthService';

function setFiles() {

}

const FreelanceApplication = () => {
  const [rate, setRate] = useState('');
  const [isApplying, setIsApplying] = useState('');
  var accessToken = AuthService.getToken();
  const handleApplyClick = async () => {
    setIsApplying(true);
    const jobId = localStorage.getItem('job_id'); // Replace with how you obtain the job ID
  
    try {
      const response = await fetch(`${config.get('BACKEND_URL')}/api/v0/jobs/${jobId}/apply`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${accessToken}`,
        },
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      setIsApplying(false);
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
                            ></textarea>
                        ) : (
                            <textarea
                              id="description"
                              rows="6"
                              className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-white sm:text-sm p-4 w-full"
                              placeholder="Enter answer here"
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
            <div className="flex items-center">
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
            </div>
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
