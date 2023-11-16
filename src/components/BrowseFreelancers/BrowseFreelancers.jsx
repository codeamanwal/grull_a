import React from 'react';
import BrowseByCard from '../BrowseJobs/BrowseByCard';
import {Button} from 'antd';
import PropTypes from 'prop-types';
const BrowseFreelancers = ({setLocationFilter, setCategoryFilter, applyFilters}) => {
  const items1 = [
    'Graphic Designer',
    'Illustrator',
    'Programmer',
    'Video Editor',
    '3D artist',
    'Product Designer',
  ];
  console.log(setLocationFilter);
  const items2 = ['India', 'USA', 'Canada', 'England', 'China', 'Russia'];

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
