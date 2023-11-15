/* eslint-disable */
import React, {useEffect, useState} from 'react';
import {
  BrowseFreelancers,
  LoggedInHeader,
  Footer,
} from '../../components';
import BrowseFreelancerProfile from '../../components/Profile/BrowseFreelancerProfile';
import {userProfile} from '../../components/Assets';
import { GrNext, GrPrevious } from "react-icons/gr";
import { axiosGet } from '../../utils/services/axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const BrowseFreelancersPage = () => {
  const [currentRangeStart, setCurrentRangeStart] = useState(0);
  const [page, setCurrentPage] = useState(1);
  const [count, setCount] = useState(0);
  const [categoryFilter, setCategoryFilter] = useState([]);
  const [locationFilter, setLocationFilter] = useState([]);
  const [freelanceData, setFreelanceData] = useState([]);
  const [transitioning, setTransitioning] = useState(false);
  const [loading,setLoading] = useState(false);
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  useEffect(() => {
    handleBrowseFreelancers();
  }, []);
  const handleBrowseFreelancers = async () => {
    setLoading(true);
    try {
      const apiUrl = "/api/v0/freelancers";
      const params = {
        page: page,
        per_page: 8,
        category:categoryFilter,
        location:locationFilter,
      };
      
     const response = await axiosGet(apiUrl,params)
      if (!response.status) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const responseData = response;
      if(page==1){
        setCount(responseData.count);
      }
      setTransitioning(false)
     
      if(page>1){
        setFreelanceData((prevData) => [...prevData, ...responseData.results]);
      }
      else{
        setFreelanceData(responseData.results);
      }
      console.log(responseData.results)
      setLoading(false);
      return true;

    } catch (error) {
      setLoading(false)
      console.error('Error occurred:', error);
      return false;
    }
  };  
  const fetchFreelancers = (increment) => {
      const newRangeStart = currentRangeStart + increment;
      if (newRangeStart > 0 && newRangeStart + 3 <= freelanceData.length) {
        setCurrentRangeStart(newRangeStart);
      }
      else if(freelanceData.length<count&&increment==1){
        console.log('here')
        setCurrentPage(page+1);
        handleBrowseFreelancers();
        const newRangeStart = currentRangeStart + 1;
        setCurrentRangeStart(newRangeStart)
      }
      else{
        return;
      }
      console.log(newRangeStart)
  };
  
  return (
    <div className="flex flex-col min-h-screen bg-[#1A0142]">
      <LoggedInHeader
        includeNavBar={true}
        category="FREELANCER"
        isFreelancer={false}
      />
      <div className="flex sm:flex-row justify-between">
        <div className="flex flex-col justify-evenly w-3/4 mt-4">
          <p className="sm:pl-20 text-center text-2xl font-bold text-white">
                        BROWSE FREELANCERS
          </p>

          <div className="p-2">
            {window.innerWidth <= 640 ? <BrowseFreelancers  setLocationFilter={setLocationFilter} setCategoryFilter={setCategoryFilter}/> : null}
          </div>

          
          <div className='flex justify-evenly'>
          <div
          className='text-white flex justify-center items-center text-lg cursor-pointer'
          onClick={() => fetchFreelancers(-1)}
        >
          <GrPrevious />
        </div >
        {/* <Slider {...settings}> */}
        <div
          className='flex'
        >
       
          {!loading && freelanceData.slice(currentRangeStart, currentRangeStart+3).map((freelancer) => (
  <BrowseFreelancerProfile
    key={freelancer.id} // Make sure to set a unique key for each profile
    toHire={true}
    isEmployerProfile={false}
    userProfileImg={userProfile}
    data={freelancer}
  />
))}

</div>
{/* </Slider> */}
<div
          className='text-white flex justify-center items-center text-lg cursor-pointer'
          onClick={() => fetchFreelancers(1)}
        >
          <GrNext />
        </div>
          </div>
         
        </div>

        {window.innerWidth > 640 ? <div><BrowseFreelancers setLocationFilter={setLocationFilter} setCategoryFilter={setCategoryFilter}/></div>:null}
      </div>
      <Footer />
    </div>
  );
};

export default BrowseFreelancersPage;
