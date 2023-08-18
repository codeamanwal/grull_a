import React from "react";
import { EditProfile, Footer, LoggedInHeader } from "../../components";

const EditProfilePage = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <LoggedInHeader
                includeNavBar={true}
                category="JOBS"
                isFreelancer={true}
            />
            <div className="flex-grow">
                <EditProfile isFreelancer={true} toHire={false} />
            </div>
            <Footer />
        </div>
    );
};

export default EditProfilePage;
