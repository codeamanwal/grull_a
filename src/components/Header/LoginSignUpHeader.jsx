import React, {useState} from 'react';
import {grullLogo, user} from '../Assets';
import {Link} from 'react-router-dom';

const LoginSignUpHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className=" fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between px-8 bg-[#1A0142] text-white gap-x-0">
        <Link to="/">
          <img
            className="h-16 w-16 object-fit sm:h-24 sm:w-24"
            src={grullLogo}
            alt="logo"
          />
        </Link>

        <div className="flex space-x-4">
          <nav className={`ml-2 ${menuOpen ? 'block' : 'hidden'} sm:block`}>
            <ul className="flex sm:space-x-2  space-x-1 justify-center items-center gap-x-3">
              <li>
                <a
                  href="/LogIn"
                  className="text-white hover:text-gray-400 font-semibold sm:text-xl text-sm leading-4 sm:leading-6"
                >
                  LOGIN
                </a>
              </li>
              <li>
                <a
                  href="/signUpOption"
                  className="text-white hover:text-gray-400 font-semibold sm:text-xl text-sm leading-4 sm:leading-6"
                >
                  SIGN UP
                </a>
              </li>

              <li>
                <img
                  className="sm:h-8 h-6 sm:w-8 w-6 object-fit"
                  src={user}
                  alt="user"
                />
              </li>
            </ul>
          </nav>

          <div
            className="block sm:hidden cursor-pointer pl-3"
            onClick={toggleMenu}
          >
            <div
              className={`h-1 w-4 bg-white my-1 ${menuOpen ? 'rotate-45' : ''}`}
            ></div>
            <div
              className={`h-1 w-4 bg-white my-1 ${menuOpen ? 'hidden' : ''}`}
            ></div>
            <div
              className={`h-1 w-4 bg-white my-1 ${
                                menuOpen ? 'rotate--45' : ''
              }`}
            ></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default LoginSignUpHeader;
