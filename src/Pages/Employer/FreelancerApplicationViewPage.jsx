import React, {useEffect, useState} from 'react';
import {LoggedInHeader, ProfileViewCard, Footer} from '../../components';
import {userProfile} from '../../components/Assets';
import {useLocation} from 'react-router-dom';
import {axiosGet} from '../../utils/services/axios';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const FreelancerApplicationViewPage = () => {
  const location = useLocation();
  const {state} = location;
  const jobId = state.jobId;
  const [loading, setLoading] = useState(false);
  const [currentpage, setCurrentPage] = useState(0);
  const [applications, setApplications] = useState([]);
  const itemsPerPage = 4;
  console.log(loading);
  const data = {
    page: 0,
    count: 0,
    next: 'string',
    prev: 'string',
    results: [
      {
        created_at: '2023-11-17T17:03:20.330Z',
        modified_at: '2023-11-17T17:03:20.330Z',
        id: 'string',
        job_id: 'string',
        employee: {
          email: 'user@example.com',
          id: 'string',
          first_name: 'string',
          last_name: 'string',
          full_name: 'string',
          description: 'string',
          location: {
            id: 'string',
            city: 'string',
            state: 'string',
            country: 'string',
          },
          skills: ['string'],
          languages: ['string'],
          role: 'GRAPHIC_DESIGNER',
          rate_per_hour: 0,
        },
        status: 'ACCEPTED',
        negotiation_status: 'CONFIRMED',
        confirmed_by_employee_at: '2023-11-17T17:03:20.330Z',
        confirmed_by_employer_at: '2023-11-17T17:03:20.330Z',
      },
      {
        created_at: '2023-11-17T17:03:20.330Z',
        modified_at: '2023-11-17T17:03:20.330Z',
        id: 'string',
        job_id: 'string',
        employee: {
          email: 'user@example.com',
          id: 'string',
          first_name: 'string',
          last_name: 'string',
          full_name: 'string',
          description: 'string',
          location: {
            id: 'string',
            city: 'string',
            state: 'string',
            country: 'string',
          },
          skills: ['string'],
          languages: ['string'],
          role: 'GRAPHIC_DESIGNER',
          rate_per_hour: 0,
        },
        status: 'ACCEPTED',
        negotiation_status: 'CONFIRMED',
        confirmed_by_employee_at: '2023-11-17T17:03:20.330Z',
        confirmed_by_employer_at: '2023-11-17T17:03:20.330Z',
      },
      {
        created_at: '2023-11-17T17:03:20.330Z',
        modified_at: '2023-11-17T17:03:20.330Z',
        id: 'string',
        job_id: 'string',
        employee: {
          email: 'user@example.com',
          id: 'string',
          first_name: 'string',
          last_name: 'string',
          full_name: 'string',
          description: 'string',
          location: {
            id: 'string',
            city: 'string',
            state: 'string',
            country: 'string',
          },
          skills: ['string'],
          languages: ['string'],
          role: 'GRAPHIC_DESIGNER',
          rate_per_hour: 0,
        },
        status: 'ACCEPTED',
        negotiation_status: 'CONFIRMED',
        confirmed_by_employee_at: '2023-11-17T17:03:20.330Z',
        confirmed_by_employer_at: '2023-11-17T17:03:20.330Z',
      },
    ],
  };
  const handleViewFreelancerApplicationsClick = async (type) => {
    try {
      setLoading(true);
      const apiUrl = `/api/v0/jobs/${jobId}/applications`;
      const params = {
        page: currentpage,
        per_page: itemsPerPage,
      };
      const response = await axiosGet(apiUrl, params);
      if (!response.status) {
        throw new Error(`API error! Message: ${response.message}`);
      }

      setApplications(data);

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

  const renderApplications = () => {
    console.log(applications);
    return (
      <div className="flex flex-row">
        {data.results.map((application, index) => (
          <div key={index}>
            <ProfileViewCard userProfileImg={userProfile} userName={application.applicantName} id={application.id}/>
          </div>
        ))}
        ;
      </div>
    );
  };
  return (
    <div className="bg-[#1A0142] flex flex-col min-h-screen">
      <LoggedInHeader includeNavBar={true} category="FREELANCER" isFreelancer={false} />
      <div className="flex-grow mt-10">
        <div className="flex sm:space-x-20">
          <div className="flex flex-col space-x-3 space-y-3 font-bold text-2xl text-white justify-start mt-4">
            <div className="flex flex-wrap sm:justify-between sm:px-6 items-center justify-center">
              <p className="sm:pl-20 text-2xl font-bold">FREELANCER APPLICATIONS</p>
              <div className="flex flex-col items-center">
                <p className="text-white sm:text-2xl text-base font-semibold">Applied in the last &#x2191; 10 &#x2193; days</p>
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
