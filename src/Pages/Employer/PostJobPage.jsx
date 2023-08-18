import React from "react";
import { PostJobForm, LoggedInHeader, Footer } from "../../components";

const PostJobPage = () => {
    return (
        <div className="bg-[#1A0142] flex flex-col min-h-screen">
            <LoggedInHeader
                includeNavBar={true}
                category="FREELANCER"
                isFreelancer={false}
            />
            <div className="flex-grow mb-7">
                <PostJobForm />
            </div>
            <Footer />
        </div>
    );
};

export default PostJobPage;
