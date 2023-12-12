import React from 'react';
import {footerimage1, footerimage2, footerimage3, footerimage4, footerimage5, footerimage6, footerimage7, footerimage8} from '../Assets';

const GrowingTogetherFooter = () => {
  return (
    <div className="w-full bg-white p-4 rounded-t-3xl">
      <p className="flex items-center justify-center w-full text-center font-medium sm:text-4xl text-2xl sm:leading-96 text-purple-600">
        GROWING TOGETHER WITH
      </p>

      <div className="border-b-2 border-gray-300 w-full my-3"></div>

      <div className="grid grid-cols-4 sm:grid-cols-8 gap-4 justify-between mt-4 mx-auto max-w-7xl">
        <a
          className="flex items-center justify-center text-gray-400 hover:text-gray-200"
        >
          <img className="sm:w-24 sm:h-12 w-20 h-10" src={footerimage1} alt="image-alt" />
        </a>
        <a
          className="flex items-center justify-center text-gray-400 hover:text-gray-200"
        >
          <img className="sm:w-24 sm:h-12 w-20 h-10" src={footerimage2} alt="image-alt" />
        </a>
        <a
          className="flex items-center justify-center text-gray-400 hover:text-gray-200"
        >
          <img className="sm:w-24 sm:h-12 w-20 h-10" src={footerimage3} alt="image-alt" />
        </a>
        <a
          className="flex items-center justify-center text-gray-400 hover:text-gray-200"
        >
          <img className="sm:w-24 sm:h-12 w-20 h-10" src={footerimage4} alt="image-alt" />
        </a>
        <a
          className="flex items-center justify-center text-gray-400 hover:text-gray-200"
        >
          <img className="sm:w-24 sm:h-12 w-20 h-10" src={footerimage5} alt="image-alt" />
        </a>
        <a
          className="flex items-center justify-center text-gray-400 hover:text-gray-200"
        >
          <img className="sm:w-24 sm:h-12 w-20 h-10" src={footerimage6} alt="image-alt" />
        </a>
        <a
          className="flex items-center justify-center text-gray-400 hover:text-gray-200"
        >
          <img className="sm:w-24 sm:h-12 w-20 h-10" src={footerimage7} alt="image-alt" />
        </a>
        <a
          className="flex items-center justify-center text-gray-400 hover:text-gray-200"
        >
          <img className="sm:w-24 sm:h-12 w-20 h-10" src={footerimage8} alt="image-alt" />
        </a>
      </div>
    </div>
  );
};

export default GrowingTogetherFooter;
