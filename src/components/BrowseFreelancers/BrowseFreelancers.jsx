import React from 'react';
import BrowseByCard from '../BrowseJobs/BrowseByCard';
import {Button} from 'antd';
import PropTypes from 'prop-types';
const BrowseFreelancers = ({setLocationFilter, setCategoryFilter, applyFilters}) => {
  const items1 = {
    'Graphic Designer': 'GRAPHIC_DESIGNER',
    'Illustrator': 'ILLUSTRATOR',
    'Programmer': 'PROGRAMMER',
    'Video Editor': 'VIDEO_EDITOR',
    '3D Artist': 'THREE_D_ARTIST',
    'Product Designer': 'PRODUCT_DESIGNER',
  };

  const items2 = {
    India: 'INDIA',
    USA: 'USA',
    Canada: 'CANADA',
    England: 'ENGLAND',
    China: 'CHINA',
    Russia: 'RUSSIA',
  };

  return (
    <div>
      <div className="flex flex-col bg-[#B37EE2] sm:p-4 lg:p-12 sm:rounded-tl-3xl sm:rounded-bl-3xl">
        <BrowseByCard topic="CATEGORY" items={items1} setFilter={setCategoryFilter}/>
        <BrowseByCard topic="LOCATION" items={items2} setFilter={setLocationFilter}/>
        <Button type="primary" style={{background: 'black'}} onClick={applyFilters}>Apply</Button>
      </div>
    </div>
  );
};
BrowseFreelancers.propTypes = {
  setCategoryFilter: PropTypes.func,
  setLocationFilter: PropTypes.func,
  applyFilters: PropTypes.func,
};
export default BrowseFreelancers;
