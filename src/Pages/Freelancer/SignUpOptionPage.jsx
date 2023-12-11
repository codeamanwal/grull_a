import React from 'react';
import {LoginSignUpHeader, GrowingTogetherFooter, SignUpBox, Footer} from '../../components';
import {user} from '../../components/Assets';
import {purpleBackImg} from '../../components/Assets';
import {Link} from 'react-router-dom';

const SignUpOptionPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <LoginSignUpHeader />
      <div
        className="flex flex-wrap justify-center items-center sm:space-x-0 space-y-5 sm:space-y-0 sm:py-40 mb-5 p-6"
        style={{
          backgroundImage: `url(${purpleBackImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          position: 'relative',
          filter: 'hue-rotate(359deg) brightness(1.2)',
        }}>
        <div className="xl:mr-44 mt-2 sm:mt-0 lg:mb-5 xl:mb-0">
          <SignUpBox />
        </div>
        <div className="flex flex-col md:max-w-xs items-center justify-center border border-black rounded-2xl bg-[rgb(61,35,128)] p-10 space-y-3">
          <p className="text-white text-xl font-medium">WHITEPAPER</p>
          <img className="md:h-20 md:w-20 w-16 h-16" src={user} alt="whitepaper" />
          <Link
            to="https://grullwork.notion.site/GRULL-FREELY-FREELANCING-c1b0781ee72d463d87be13da0c614ff7"
            target='blank'>
            <button className="bg-purple-300 px-6 py-3 rounded-2xl">CLICK TO READ</button>
          </Link>
        </div>
      </div>

      <GrowingTogetherFooter />
      <Footer />
    </div>
  );
};

export default SignUpOptionPage;
