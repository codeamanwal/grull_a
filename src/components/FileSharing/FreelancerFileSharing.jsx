import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';
import AuthService from '../../Services/AuthService';
import {Select, Typography} from 'antd';
import {axiosGet, axiosPost} from '../../utils/services/axios';
import CommentModal from '../../utils/CommentModal';
import {openNotificationWithIcon} from '../../utils/openNotificationWithIcon';
import {GiPartyPopper} from 'react-icons/gi';
import ReviewModal from '../../utils/ReviewModal';
const {Option} = Select;
const FreelancerFileSharing = () => {
  const location = useLocation();
  const urlRegex =
    /^(?:(?:https?|ftp):)?\/\/(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?(?:[/?#]\S)?$/;
  const [completedmilestones, setCompletedMilestones] = useState(0);
  const [urls, setSelectedUrls] = useState();
  const [comment, setComment] = useState();
  const isFreelancer = AuthService.isFreelancer();
  const [submissionData, setSubmittedData] = useState([]);
  const [review, setReview] = useState(0);
  const [approved, setApproved] = useState(false);
  let validUrls = [];
  const [modalVisible, setModalVisible] = useState(false);
  const [reviewModal, setReviewModal] = useState(false);
  const [payout, setSendPayout] = useState(false);
  const [completedJob, setCompletedJob] = useState(false);
  const handleOpenModal = () => {
    setModalVisible(true);
  };
  const handleCancel = () => {
    setModalVisible(false);
  };
  const handleOk = (comment) => {
    setComment(comment);
    setModalVisible(false);
  };
  const handleOpenReviewModal=()=>{
    setReviewModal(true);
  };
  const handleCancelReviewModal=()=>{
    setReviewModal(false);
  };
  const handleOkReviewModal=(review)=>{
    setReview(review);
    console.log(review);
    setReviewModal(false);
    addReview(submissionData[completedmilestones].id);
  };
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
  const getSubmissions = async () => {
    const apiUrl = `/api/v0/jobs/${location?.state?.jobData?.id}/submissions`;
    const response = await axiosGet(apiUrl);
    console.log(response);
    setSubmittedData(response.results);
    checkProgress(response.results);
  };
  const checkProgress = (data) => {
    let count = 0;
    for (let i = 0; i < 4; i++) {
      if (data[i]?.approved_at === null) {
        break;
      } else {
        count++;
      }
    }
    if (count==4) {
      setCompletedJob(true);
      setCompletedMilestones(4);
    } else {
      setCompletedMilestones(count);
    }
  };
  const makeSubmission = async () => {
    if (!comment || !urls) {
      openNotificationWithIcon('error', 'Please fill all the details properly');
      return;
    }
    const data = {
      title: 'Submission',
      description: comment,
      submission_urls: urls,
    };
    const apiUrl = `/api/v0/jobs/${location?.state?.jobData?.id}/add-submission`;
    const response = await axiosPost(apiUrl, data);
    console.log(response);
    getSubmissions();
  };
  const addReview=async (id)=>{
    const data = {
      'review_comments': [`${review.comment}`],
      'review_stars': review.rating,
    };
    const apiUrl = `/api/v0/submissions/${id}/review`;
    const response = await axiosPost(apiUrl, data);
    console.log(response);
  };
  const approveMilestone=async ()=>{
    // if (!payout) {
    //   openNotificationWithIcon('error', 'Complete the Payment First');
    //   return;
    // }
    if (approved) {
      return;
    }
    const apiUrl = `/api/v0/submissions/${submissionData[completedmilestones].id}/approve`;
    const response = await axiosPost(apiUrl);

    if (response.status) {
      openNotificationWithIcon('success', 'Milestone Approved Scuccessfully');
      getSubmissions();
      setApproved(true);
    }
  };
  const approvePayout=async ()=> {
    const {id} = location.state.jobData.employee;
    const requestData={
      amount: location.state.jobData.rate_per_hour/4,
    };
    const response = await axiosPost(`/api/v0/users/${id}/send-money`, requestData);
    if (response.status) {
      openNotificationWithIcon('success', 'Amount Transferred successfully');
      setSendPayout(true);
    } else {
      openNotificationWithIcon('error', response.message);
    }
    console.log(payout);
  };
  useEffect(() => {
    getSubmissions();
  }, []);
  function addMilestones() {
    const milestones = [];
    for (let i = 0; i <= completedmilestones; i++) {
      milestones.push(
          <div key={i} className="flex  flex-wrap items-center justify-center space-y-3 font-GeneralSans w-full sm:w-5/6">
            <p className="sm:w-1/4 sm:text-xl text-sm font-semibold">Milestone {i + 1}</p>
            <div className="flex justify-between space-x-2 sm:space-x-10 w-full sm:w-3/4">
              {/* <button className="bg-purple-900 bg-opacity-70 border border-solid text-sm border-purple-500 rounded-lg text-purple-500  sm:p-4 w-full sm:w-1/3">
                {isFreelancer ? 'Upload Urls' : 'Download Urls'}
              </button> */}
              <Select
                id={`milestone ${i}`}
                mode="tags"
                placeholder="eg-https://www.google.com"
                onChange={handleUrlChange}
                disabled={!isFreelancer||i!=completedmilestones}
                value={!isFreelancer||i!=completedmilestones?submissionData[i]?.submission_urls:urls}
                tokenSeparators={[',']}
                className="bg-[#1A0142] border border-solid border-[#B1B1B1]  rounded-lg text-gray-900 sm:text-sm sm:w-full postjobsselect text-white">
                {isFreelancer ?
                urls?.map((tag, index) => (
                  <Option key={index} value={tag} onClose={() => handleUrlChange(urls.filter((item) => item !== tag))}>
                    {tag}
                  </Option>
                )) :
                submissionData[i]?.submission_urls?.map((tag, index) => (
                  <Option key={index} value={tag} onClose={() => handleUrlChange(urls.filter((item) => item !== tag))}>
                    {tag}
                  </Option>
                ))}
              </Select>
              <button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/3" onClick={completedmilestones == i ? (!isFreelancer ? handleOpenReviewModal : handleOpenModal):null}>
                {!isFreelancer ? 'Review ' : 'Add Comments'}
              </button>
              <CommentModal visible={modalVisible} onCancel={handleCancel} onOk={handleOk} />
              <ReviewModal visible={reviewModal} onCancel={handleCancelReviewModal} onOk={handleOkReviewModal} />
              <button onClick={completedmilestones == i ? (isFreelancer ? makeSubmission : approveMilestone):null} className="bg-purple-500 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/3">
                {isFreelancer ? 'Request for approval' : 'Approve'}
              </button>
            </div>
            <div className="flex flex-row-reverse font-GeneralSans w-full py-5">
              {!isFreelancer && <button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/4" onClick={completedmilestones == i &&approved ? approvePayout:null}>Release Payment</button>}
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
            <div className="bg-green-500 rounded-lg absolute top-0 left-0 bottom-0" style={{width: `${completedmilestones * 25}%`}}></div>
          </div>
          <div className="flex flex-row text-white sm:text-base text-sm font-GeneralSans sm:leading-24 pt-4 sm:space-x-4 space-x-5 ">
            <p style={{width: '20%'}}>{}</p>
            <p style={{width: '20%'}}>1st Milestone</p>
            <p style={{width: '20%'}}>2nd Milestone</p>
            <p style={{width: '20%'}}>3rd Milestone</p>
            <p style={{width: '20%'}}>4th Milestone</p>
          </div>
        </div>
        <div className='w-full flex justify-between items-center'>
          <div className="flex flex-col flex-wrap sm:space-y-10 space-y-6 ">
            <p className="text-2xl font-spaceGrotesk font-semibold py-3 text-decoration-underline">Job Title - {location?.state?.jobData?.title}</p>
          </div>
          <div className="flex flex-col flex-wrap w-1/2 justify-end items-end cursor-none">
            <button className="bg-purple-500 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2 sm:p-4 w-full sm:w-1/3">
           Budget {location?.state?.jobData?.rate_per_hour}
            </button>
          </div>
        </div>
        {!completedJob?<div className="flex justify-center flex-col items-center">{addMilestones()}</div>:<div>
          <Typography className='text-white text-xl flex items-center w-full'>Job Completed Successfully <GiPartyPopper className='pl-2'/></Typography>
        </div>}
      </div>
    </div>
  );
};

export default FreelancerFileSharing;
