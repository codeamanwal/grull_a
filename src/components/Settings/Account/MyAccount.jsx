import React from 'react';
import {edit} from '../../Assets';
import {Link} from 'react-router-dom';

const MyAccount = () => {
  return (
    <div className="flex  justify-center items-center space-y-10 space-x-12 text-white bg-[#1A0142]">
      <div className="flex flex-col space-y-6 pt-20 font-semibold justify-start text-sm">
        <button className="md:px-8 sm:p-4 p-2 sm:w-48 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
          My Account
        </button>
        <Link
          to="/BillsAndPaymentsPage"
          className="text-center bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg sm:p-4  p-2 sm:w-48"
        >
          Payment
        </Link>
        <button className="bg-purple-900 bg-opacity-30 rounded-lg border border-purple-600 sm:p-4 sm:w-48 p-2">
          Tax Information
        </button>
      </div>

      <div className="flex flex-col space-y-10 sm:pl-10">
        <div className="flex space-x-7 sm:text-3xl text-xl font-spaceGrotesk font-medium">
          <p>ACCOUNT DETAILS</p>
          <Link to="/EditMyAccountPage">
            <img
              className="sm:w-6 sm:h-6 sm:object-fit w-4 h-4"
              src={edit}
              alt="edit"
            />
          </Link>
        </div>
        <p className="sm:text-2xl text-lg font-GeneralSans font-semibold sm:leading-96">
          Chanderkant Sharma
        </p>
        <div className="flex flex-col space-y-6 sm:flex-row sm:space-x-10 text-base font-GeneralSans font-medium leading-7">
          <div className="flex flex-col space-y-2">
            <p>Chander@gmail.com</p>
            <p>+91-987654321</p>
          </div>
          <p>
            Building XYZ, Street XYX, Full address City name State Name, 345678
          </p>
          <p>UTC+05:30 Mumbai, Kolkata, Chennai, New Delhi</p>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
