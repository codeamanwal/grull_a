import React from 'react';
import {masterCard, visa, trashIcon} from '../../Assets';
import {Link} from 'react-router-dom';

const CardDetails = () => {
  return (
    <div className="flex flex-wrap bg-[#1A0142] text-white w-3/4 mx-auto pt-6">
      <div className="sm:flex hidden flex-col space-y-6 font-semibold justify-start">
        <button className="md:px-8 sm:p-4 p-2 sm:w-48 rounded shadow bg-purple-900">
                    My Account
        </button>
        <Link
          to="/BillsAndPaymentsPage"
          className="text-center bg-gradient-to-l from-purple-400 to-transparent bg-opacity-70 border border-solid border-purple-500 rounded-lg sm:p-4  p-2 sm:w-48"
        >
                    Payment
        </Link>
        <button className="md:px-8 sm:p-4 p-2 sm:w-48 rounded shadow bg-purple-900">
                    Tax Information
        </button>
      </div>

      <div className="sm:hidden flex space-x-2 py-10 font-semibold text-sm text-white">
        <button className="md:px-8 sm:p-4 p-2 sm:w-48 rounded shadow bg-purple-900 bg-opacity-70 ">
                    My Account
        </button>
        <Link
          to="/BillsAndPaymentsPage"
          className="text-center bg-gradient-to-l from-purple-400 to-transparent border border-solid border-purple-500 rounded-lg sm:p-4  p-2 sm:w-48"
        >
                    Payment
        </Link>
        <button className="md:px-8 sm:p-4 p-2 sm:w-48 rounded shadow bg-purple-900 bg-opacity-70">
                    Tax Information
        </button>
      </div>

      <div className="flex flex-col justify-start space-y-10 sm:w-3/4 mx-auto">
        <div className="flex flex-col  justify-center">
          <p className="text-2xl font-bold">BILLING DETAILS</p>

          <p className="text-xl font-semibold">Saved Cards</p>
        </div>

        <div className="grid sm:grid-cols-4  gap-4">
          <div className="flex  items-center justify-center">
            <img
              src={masterCard}
              alt="Mastercard"
              className="w-1/2 h-12 bg-white rounded-lg p-1"
            />
          </div>

          <p className="flex justify-center items-center font-semibold text-lg border border-gray-300">
                        85241*******98741
          </p>
          <p className="flex justify-center items-center font-semibold text-lg border border-gray-300">
                        Chanderkant Sarma
          </p>

          <div className="flex items-center justify-center">
            <img
              src={trashIcon}
              alt="Trash Icon"
              className="w-6 h-6 object-contain"
            />
          </div>

          <div className="border sm:hidden my-4"></div>

          <div className="flex items-center justify-center">
            <img
              src={visa}
              alt="Visa"
              className="w-1/2 h-12 bg-white rounded-lg p-1"
            />
          </div>

          <p className="flex justify-center items-center font-semibold text-lg border border-gray-300">
                        85241*******98741
          </p>

          <p className="flex justify-center items-center font-semibold text-lg border border-gray-300">
                        Chanderkant Sarma
          </p>

          <div className="flex items-center justify-center">
            <img
              src={trashIcon}
              alt="Trash Icon"
              className="w-6 h-6 object-contain"
            />
          </div>
          <div className="border sm:hidden my-4"></div>
        </div>

        <div className="flex justify-end">
          <Link to="/EditCardDetailsPage">
            <button className="sm:text-xl font-medium md:px-8 py-6 sm:px-16 rounded shadow bg-gradient-to-l from-purple-400 to-transparent font-spaceGrotesk">
                            ADD NEW BILLING METHOD
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
