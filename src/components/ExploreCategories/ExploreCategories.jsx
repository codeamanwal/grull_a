import React from 'react';
import Category from './Category';
import {graphics, sales, writing, business, music} from '../Assets';

const ExploreCategories = () => {
  return (
    <>
      <div className="flex flex-col items-center bg-[#1A0142] sm:p-20 p-3 sm:space-y-10 space-y-5">
        <p className="font-semibold sm:text-6xl sm:leading-24 text-white font-spaceGrotesk">About Us</p>
        <p className="md:text-2xl text-lg text-center font-GeneralSans md:mb-10 text-white md:w-4/5 w-full md:leading-8 leading-5">
          Grull is a design-centric freelancing platform with a deep commitment to quality. Unlike generic competitors, we foster a community where designers thrive, continuously upskill through Grull
          Academy, and build long-lasting client relationships. Our AI-driven matchmaking ensures the right fit for projects and cultures. With a zero-commission model, we prioritize designers&rsquo;
          earnings. Robust conflict resolution mechanisms and a localized-global approach provide support and accessibility. We prioritize sustainable growth, offering a seamless user experience.
          Grull addresses the holistic needs of the freelance design industry, making it stand out in a competitive landscape.
        </p>
      </div>
      <div className="flex flex-col items-center bg-[#1A0142] sm:p-20 p-3 sm:space-y-10 space-y-5">
        <p className="font-semibold sm:text-6xl sm:leading-24 text-white font-spaceGrotesk">EXPLORE FREELANCERS ACROSS CATEGORIES</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 gap-2 sm:gap-4  font-spaceGrotesk">
          <Category logo={graphics} title="Graphic & Design" />
          <Category logo={sales} title="Sales & Marketing" />
          <Category logo={writing} title="UI/UX
" />
          <Category logo={business} title="Branding" />
          <Category logo={music} title="Tech & Dev" />
          <Category logo={music} title="Growth & SEO" />
        </div>
      </div>
    </>
  );
};

export default ExploreCategories;
