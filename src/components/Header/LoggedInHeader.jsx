import React, {useState, useEffect, useRef} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {grullLogo, bell} from '../Assets';
import AuthService from '../../Services/AuthService';
import fetchMeData from '../../Services/User';
import {CiWallet} from 'react-icons/ci';
const LoggedInHeader = ({includeNavBar, isFreelancer}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [userData, setUserData] = useState({});
  console.log(isFreelancer, 'isFreelancer');

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('click', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    fetchMeData()
        .then((fetchedData) => {
          setUserData(fetchedData);
        })
        .catch((error) => {
          console.error('Error fetching data:', error);
        });
  }, []);


  isFreelancer = AuthService.isFreelancer();

  return (
    <header className=" fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-4 sm:px-8 bg-[#080112] text-white w-full">
        <Link to="/">
          <img
            className="h-16 w-16 sm:h-24 sm:w-24 object-fit"
            src={grullLogo}
            alt="logo"
          />
        </Link>

        {includeNavBar && (
          <nav className=" flex justify-end sm:pl-6 w-3/4 sm:w-full">
            <ul className="flex space-x-4 sm:space-x-8 justify-end items-center gap-4 sm:gap-4">
              {isFreelancer ? (
                                <li className="">
                                  <Link
                                    to={isFreelancer ? '/jobs' : '/freelancers'}
                                    className="text-white hover:text-gray-400 font-semibold text-xs sm:text-sm md:text-xl inline-block"
                                  >
                                        BROWSE JOBS
                                  </Link>
                                </li>
                            ) : (
                                <li className="sm:w-auto w-1/4 mr-3">
                                  <Link
                                    to={isFreelancer ? '/jobs' : '/freelancers'}
                                    className="text-white hover:text-gray-400 font-semibold text-xs sm:text-sm md:text-xl inline-block"
                                  >
                                        BROWSE FREELANCER
                                  </Link>
                                </li>
                            )}
              { !isFreelancer && (
                <li className="sm:w-auto  w-1/12 mr-3">
                  <Link
                    to="/post-job"
                    className="text-white hover:text-gray-400 font-semibold text-xs sm:text-sm md:text-xl inline-block"
                  >
                                        POST JOBS
                  </Link>
                </li>
              )}

              <li>
                <img
                  className="h-4 w-4 sm:h-8 sm:w-8 object-fit"
                  src={bell}
                  alt="bell"
                />
              </li>

              <li className="relative" ref={dropdownRef}>
                <button
                  className="flex items-center focus:outline-none"
                  onClick={toggleDropdown}
                >
                  <img
                    className="h-6 w-6 sm:h-8 sm:w-8 object-fit cursor-pointer"
                    src={`https://ui-avatars.com/api/?name=${userData['first_name']}+${userData['last_name']}`}
                    alt="user"
                  />
                </button>
                {isDropdownOpen &&
                                    (
                                      <ul className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-2 z-50">
                                        <li>
                                          <Link
                                            to={
                                              {
                                                pathname: '/my-profile',
                                              }
                                            }
                                            className="block px-4 py-1 text-sm leading-5 text-gray-800 hover:bg-gray-100"
                                          >
                                                    Manage Profile
                                          </Link>
                                        </li>
                                        <li className="px-4 py-1 text-sm leading-5 text-gray-800 hover:bg-gray-100 flex items-center">
                                          <CiWallet className='mr-2'/> Wallet Balance - {userData.wallet_balance}
                                        </li>
                                        <hr className="flex justify-center items-center w-3/4 ml-4 my-2 border-1 border-black" />
                                        <li>
                                          <Link
                                            to="/logout"
                                            className="block px-4 py-2 text-sm leading-5 text-gray-800 hover:bg-gray-100 font-bold"
                                          >
                                                    LOGOUT
                                          </Link>
                                        </li>
                                      </ul>
                                    )}
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

LoggedInHeader.propTypes = {
  includeNavBar: PropTypes.bool,
  category: PropTypes.string,
  isFreelancer: PropTypes.bool,
};

export default LoggedInHeader;
