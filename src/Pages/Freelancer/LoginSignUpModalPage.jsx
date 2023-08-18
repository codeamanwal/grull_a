import React from "react";
import PropType from "prop-types";
import { Footer, LoggedInHeader, SignUp } from "../../components";

var LoginSignUpModalPage = ({ otp, welcome }) => {
    return (
        <div className="flex flex-col min-h-screen bg-[#1A0142]">
            <LoggedInHeader includeNavBar={false} />
            <div className="flex-grow overflow-y-auto">
                <div className="flex justify-center items-center py-28">
                    <SignUp isOtp={otp} isWelcome={welcome} />
                </div>
            </div>
            <Footer />
        </div>
    );
};
LoginSignUpModalPage.propTypes = {
    otp: PropType.string,
    welcome: PropType.bool,
};

export default LoginSignUpModalPage;
