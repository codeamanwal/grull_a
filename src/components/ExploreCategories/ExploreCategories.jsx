import React from 'react';
import Category from './Category';
import {graphics, sales, writing, business, music} from '../Assets';

const ExploreCategories = () => {
  return (
    <div className="flex flex-col items-center bg-[#1A0142] sm:p-20 p-3 sm:space-y-10 space-y-5">
      <p className="font-semibold sm:text-6xl sm:leading-24 text-white font-spaceGrotesk">
				EXPLORE FREELANCERS ACROSS CATEGORIES
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 sm:gap-4 gap-2 font-spaceGrotesk">
        <Category logo={graphics} title="Graphic & Design" />
        <Category logo={sales} title="Sales & Marketing" />
        <Category logo={writing} title="Writing & Translation" />
        <Category logo={business} title="Business Consulting" />
        <Category logo={music} title="Music & Audio" />
        <Category logo={music} title="Music & Audio" />
      </div>
    </div>
  );
};

export default ExploreCategories;
