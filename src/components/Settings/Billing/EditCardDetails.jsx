import React, {useState} from 'react';
import {
  masterCard,
  visa,
  americanExpress,
  gpay,
  phonepay,
  paytm,
} from '../../Assets';
import {Link} from 'react-router-dom';

const EditCardDetails = () => {
  const [isCardChecked, setIsCardChecked] = useState(true);
  const [isPaypalChecked, setIsPaypalChecked] = useState(false);

  const handleCardCheckboxChange = () => {
    setIsCardChecked(true);
    setIsPaypalChecked(false);
  };

  const handlePaypalCheckboxChange = () => {
    setIsPaypalChecked(true);
    setIsCardChecked(false);
  };

  return (
    <div className="flex flex-wrap sm:space-x-5 bg-[#1A0142] text-white w-4/5 mx-auto justify-between sm:mt-20">
      <div className="sm:flex hidden flex-col space-y-6  font-semibold justify-start">
        <button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-4 w-48">
                    My Account
        </button>
        <button className="md:px-8 p-4 w-48 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
                    Payment
        </button>
        <button className="bg-purple-900 bg-opacity-30 rounded-lg border border-purple-600 p-4 w-48">
                    Tax Information
        </button>
      </div>

      <div className="sm:hidden flex  py-10 space-x-5 font-semibold text-sm text-white">
        <button className="flex-grow bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2">
                    My Account
        </button>
        <button className="flex-grow bg-purple-900 bg-opacity-70 border border-solid bg-gradient-to-l from-purple-400 to-transparentrounded-lg p-2">
                    Payment
        </button>
        <button className="flex-grow bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg p-2">
                    Tax Information
        </button>
      </div>

      <div className="flex flex-col sm:space-y-0 space-y-2">
        <p className="text-white font-bold text-2xl">NEW BILLING DETAILS</p>
        <div className="grid sm:grid-cols-8  grid-cols-5 sm:gap-10 sm:p-10 p-3 gap-4">
          <label className="sm:col-span-4 col-span-3  text-base font-semibold">
            <input
              type="checkbox"
              className="form-checkbox mr-2"
              checked={isCardChecked}
              onChange={handleCardCheckboxChange}
            />
                        Debit/Credit Card
          </label>

          <label className="sm:col-span-4 col-span-2 text-base font-semibold ">
            <input
              type="checkbox"
              className="form-checkbox mr-2"
              checked={isPaypalChecked}
              onChange={handlePaypalCheckboxChange}
            />
                        Paypal/UPI
          </label>

          <div className="col-span-full">
            {/* debit/credit card */}
            {isCardChecked && (
              <div className="grid sm:grid-cols-8 grid-cols-3 gap-2">
                <div className="sm:col-span-2  col-span-full flex flex-col justify-center">
                  <label htmlFor="cardNumber" className="mb-1">
                                        Card Number
                  </label>
                  <input
                    type="text"
                    id="cardNumber"
                    className="border border-gray-300 rounded sm:px-4 py-2 bg-[#1A0142]"
                  />
                </div>

                <div className="sm:col-span-2 flex justify-center items-center">
                  <img
                    src={visa}
                    alt="Visa"
                    className="w-1/2 h-12 bg-white rounded-lg p-1"
                  />
                </div>

                <div className="sm:col-span-2 flex justify-center items-center">
                  <img
                    src={masterCard}
                    alt="Mastercard"
                    className="w-1/2 h-12 bg-white rounded-lg p-1"
                  />
                </div>

                <div className="sm:col-span-2 flex justify-center items-center">
                  <img
                    src={americanExpress}
                    alt="American Express"
                    className="w-1/2 h-12 bg-white rounded-lg p-1"
                  />
                </div>
              </div>
            )}

            {/* paypal/upi */}
            {isPaypalChecked && (
              <div className="grid sm:grid-cols-8 grid-cols-3 sm:gap-10 gap-2 ">
                <div className="sm:col-span-2 col-span-full flex flex-col  space-y-2  justify-start">
                  <label htmlFor="enterupiid" className="mb-1">
                                        Enter UPI id
                  </label>
                  <input
                    type="text"
                    id="enterupiid"
                    className="border border-gray-300 rounded sm:px-4 py-2 bg-[#1A0142]"
                  />
                  <p className=" text-green-500">Verified</p>
                </div>

                <div className="sm:col-span-2 flex justify-center items-center">
                  <img
                    src={gpay}
                    alt="gpay"
                    className="w-3/4 h-12 bg-white rounded-lg p-1 pt-3"
                  />
                </div>

                <div className="sm:col-span-2 flex justify-center items-center">
                  <img
                    src={phonepay}
                    alt="phonepay"
                    className="w-3/4 h-12 bg-white rounded-lg p-1 pt-3"
                  />
                </div>

                <div className="sm:col-span-2 flex justify-center items-center">
                  <img
                    src={paytm}
                    alt="paytm"
                    className="w-3/4 h-12 bg-white rounded-lg p-1 pt-3"
                  />
                </div>
              </div>
            )}
          </div>

          {isCardChecked && (
            <div className=" col-span-full">
              <div className="grid sm:grid-cols-8 sm:gap-10 gap-2">
                <div className="col-span-2">
                  <div className="flex flex-col">
                    <label htmlFor="accountHolderName" className="mb-1">
                                            Account Holder Name
                    </label>
                    <input
                      type="text"
                      id="accountHolderName"
                      className="border border-gray-300 rounded sm:px-4 py-2 bg-[#1A0142]"
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="flex flex-col">
                    <label htmlFor="cvv" className="mb-1">
                                            CVV
                    </label>
                    <input
                      type="text"
                      id="cvv"
                      className="border border-gray-300 rounded sm:px-4 py-2 bg-[#1A0142]"
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <div className="flex flex-col">
                    <label htmlFor="expiryDate" className="mb-1">
                                            Expiry Date
                    </label>
                    <input
                      type="text"
                      id="expiryDate"
                      className="border border-gray-300 rounded sm:px-4 py-2 bg-[#1A0142]"
                    />
                  </div>
                </div>

                <div className="col-span-2">
                  <label htmlFor="unlabeledInput" className="mb-1">
                                        Unlabeled
                  </label>
                  <div className="flex flex-col">
                    <input
                      type="text"
                      id="unlabeledInput"
                      className="border border-gray-300 rounded sm:px-4 py-2 bg-[#1A0142]"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-end items-center space-x-5 sm:text-xl text-base font-spaceGrotesk font-medium sm:leading-96 sm:pt-10 pt-5">
          <button>CANCEL</button>
          <Link
            to="/CardDetailsPage"
            className="block md:px-8 p-4 w-48 rounded shadow bg-gradient-to-l from-purple-400 to-transparent text-white text-center"
          >
                        SAVE
          </Link>
        </div>
      </div>
    </div>
  );
};

export default EditCardDetails;
