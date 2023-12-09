import React, {useEffect, useState} from 'react';
import {LoggedInHeader, ProfileViewCard, Footer} from '../../components';
import {userProfile} from '../../components/Assets';
import {useLocation} from 'react-router-dom';
import {axiosGet} from '../../utils/services/axios';
// import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {GrNext, GrPrevious} from 'react-icons/gr';

const FreelancerApplicationViewPage = () => {
  const location = useLocation();
  const {state} = location;
  const jobId = state.jobId;
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(1);
  const [applications, setApplications] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [totalEntries, setTotalEntries] = useState(0);
  const itemsPerPage = 3;
  console.log(loading);
  const handleViewFreelancerApplicationsClick = async (type) => {
    try {
      setLoading(true);
      const apiUrl = `/api/v0/jobs/${jobId}/applications`;
      const params = {
        page: currentpage,
        per_page: 3,
      };
      const response = await axiosGet(apiUrl, params);
      if (!response.status) {
        throw new Error(`API error! Message: ${response.message}`);
      }
      setApplications((prevApplications) => [...prevApplications, ...response.results]);
      setTotalEntries(response.count);
      setLoading(false);
      setCurrentPage((prevPage) => prevPage + 1);
      return true;
    } catch (error) {
      console.error('Error occurred:', error);
      setLoading(false);
      return false;
    }
  };

  useEffect(() => {
    handleViewFreelancerApplicationsClick();
  }, []);
  const handleNext = () => {
    if (currentIndex < applications.length-2) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    } else if (currentIndex<totalEntries) {
      handleViewFreelancerApplicationsClick();
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };
  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  const renderApplications = () => {
    return (
      <div className="flex flex-row">
        <div
          className="text-white flex justify-center items-center text-lg cursor-pointer"
          onClick={handlePrevious}
        >
          <GrPrevious />
        </div>
        {applications
            ?.slice(currentIndex, currentIndex + itemsPerPage)
            .map((application, index) => (
              <div key={index}>
                <ProfileViewCard userProfileImg={userProfile} userName={application.applicantName} id={application.id} userData={application} jobId={jobId}/>
              </div>
            ))}
        <div className="text-white flex justify-center items-center text-lg cursor-pointer" onClick={handleNext}>
          <GrNext />
        </div>
      </div>
    );
  };
  return (
    <div className="bg-[#1A0142] flex flex-col min-h-screen">
      <LoggedInHeader includeNavBar={true} category="FREELANCER" isFreelancer={false} />
      <div className="flex-grow mt-10">
        <div className="flex justify-center">
          <div className="flex flex-col space-x-3 font-bold text-2xl text-white justify-start mt-4">
            <div className="flex flex-wrap sm:justify-between sm:px-6 items-center justify-center">
              <p className="sm:pl-20 text-2xl font-bold">FREELANCER APPLICATIONS</p>
              <div className="flex flex-col items-center">
                <p className="text-white sm:text-2xl text-base font-semibold">
                  Applied in the last &#x2191; 10 &#x2193; days
                </p>
              </div>
            </div>

            {renderApplications()}

          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FreelancerApplicationViewPage;
