import React from 'react';
import {Link} from 'react-router-dom';

const EditMyAccount = () => {
  return (
    <div className="flex justify-center  items-center space-y-10 space-x- text-white bg-[#1A0142] w-3/4 mx-auto p-2">
      <div className="flex flex-col space-y-6 pt-20 font-semibold justify-start text-sm">
        <button className="md:px-8 sm:p-4 p-2 sm:w-48 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
					My Account
        </button>
        <Link
          to="/cardDetails"
          className="text-center bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg sm:p-4  p-2 sm:w-48"
        >
					Payment
        </Link>
        <button className="bg-purple-900 bg-opacity-30 rounded-lg border border-purple-600 sm:p-4 sm:w-48 p-2">
					Tax Information
        </button>
      </div>

      <div className="flex flex-col justify-center space-x-16 space-y-8 w-full sm:space-x-20">
        <p className="sm:text-3xl text-xl text-center font-spaceGrotesk font-semibold">
					ACCOUNT DETAILS
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-4 gap-2 sm:space-y-3 text-base font-GeneralSans font-medium">
          <div className="sm:col-span-1 flex flex-col justify-center ">
            <label htmlFor="fullName" className="block mb-2">
							Full Name
            </label>
            <input
              type="text"
              id="fullName"
              className="border border-gray-300 rounded sm:px-4 py-2 bg-[#1A0142]"
            />
          </div>
          <div className="sm:col-span-1 flex flex-col justify-center">
            <label htmlFor="email" className="block mb-2">
							Email
            </label>
            <input
              type="email"
              id="email"
              className="border border-gray-300 rounded px-4 py-2 bg-[#1A0142]"
            />
          </div>
          <div className="sm:col-span-1 flex flex-col justify-center">
            <label htmlFor="phone" className="block mb-2">
							Phone No.
            </label>
            <input
              type="text"
              id="phone"
              className="border border-gray-300 rounded px-4 py-2 bg-[#1A0142]"
            />
          </div>

          <div className="sm:col-span-2 flex flex-col justify-center">
            <label htmlFor="address" className="block mb-2">
							Address
            </label>
            <input
              type="text"
              id="address"
              className="border border-gray-300 rounded px-4 py-2 w-full bg-[#1A0142]"
            />
          </div>
          <div className="sm:col-span-1 flex flex-col justify-center">
            <label htmlFor="timezone" className="block mb-2">
							Timezone
            </label>
            <input
              type="text"
              id="timezone"
              className="border border-gray-300 rounded px-4 py-2 w-full bg-[#1A0142]"
            />
          </div>
          <div className="sm:col-span-1 flex flex-col justify-center">
            <label htmlFor="city" className="block mb-2">
							City
            </label>
            <input
              type="text"
              id="city"
              className="border border-gray-300 rounded px-4 py-2 bg-[#1A0142]"
            />
          </div>
          <div className="sm:col-span-1 flex flex-col justify-center">
            <label htmlFor="country" className="block mb-2">
							Country
            </label>
            <input
              type="text"
              id="country"
              className="border border-gray-300 rounded px-4 py-2 bg-[#1A0142]"
            />
          </div>
          <div className="sm:col-span-1 flex flex-col justify-center">
            <label htmlFor="pincode" className="block mb-2">
							Pincode
            </label>
            <input
              type="text"
              id="pincode"
              className="border border-gray-300 rounded px-4 py-2 bg-[#1A0142]"
            />
          </div>
        </div>

        <div className="flex justify-end items-center space-x-5 text-xl font-spaceGrotesk font-medium dm:leading-96 sm:pt-10">
          <p>CANCEL</p>
          <a
            href="/billsAndPayments"
            className="block md:px-8 p-2 w-48 rounded shadow bg-gradient-to-l from-purple-400 to-transparent text-white text-center"
          >
						SAVE
          </a>
        </div>
      </div>
    </div>
  );
};

export default EditMyAccount;
