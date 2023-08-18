import React from "react";
import { EditMyAccount, Footer, LoggedInHeader } from "../../components";

const EditMyAccountPage = () => {
    return (
        <div className="flex flex-col min-h-screen bg-[#1A0142]">
            <LoggedInHeader
                includeNavBar={true}
                category="JOBS"
                isFreelancer={true}
            />
            <div className="flex-grow">
                <EditMyAccount />
            </div>
            <Footer />
        </div>
    );
};

export default EditMyAccountPage;
