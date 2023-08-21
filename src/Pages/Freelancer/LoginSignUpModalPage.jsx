import React from 'react';
import PropTypes from 'prop-types';
import {Footer, LoggedInHeader, SignUp, LogIn} from '../../components';

const LoginSignUpModalPage = ({welcome}) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#1A0142]">
      <LoggedInHeader includeNavBar={false} />
      <div className="flex-grow overflow-y-auto">
        <div className="flex justify-center items-center py-28">
          {welcome ? <LogIn /> : <SignUp isWelcome={welcome} />}
        </div>
      </div>
      <Footer />
    </div>
  );
};

LoginSignUpModalPage.propTypes = {
  welcome: PropTypes.bool,
};

export default LoginSignUpModalPage;
