import React from "react";
import {
    LoggedInHeader,
    ProfileViewCard,
    Footer,
} from "../../components";
import { userProfile } from "../../components/Assets";

const FreelancerApplicationViewPage = () => {
    return (
        <div className="bg-[#1A0142] flex flex-col min-h-screen">
            <LoggedInHeader
                includeNavBar={true}
                category="FREELANCER"
                isFreelancer={false}
            />
            <div className="flex-grow mt-10">
                <div className="flex sm:space-x-20">
                    <div className="flex flex-col space-x-3 space-y-3 font-bold text-2xl text-white justify-start mt-4">
                        <div className="flex flex-wrap sm:justify-between sm:px-6 items-center justify-center">
                            <p className="sm:pl-20 text-2xl font-bold">
								FREELANCER APPLICATIONS
                            </p>
                            <div className="flex flex-col items-center">
                                <p className="text-white sm:text-2xl text-base font-semibold">
									Applied in the last &#x2191; 10 &#x2193; days
                                </p>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-4  grid-cols-1 gap-4">
                            <div className="flex flex-col">
                                <div className="flex-grow">
                                    <ProfileViewCard
                                        userProfileImg={userProfile}
                                        userName="Chandrakanth Sharma"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex-grow">
                                    <ProfileViewCard
                                        userProfileImg={userProfile}
                                        userName="Chandrakanth Sharma"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex-grow">
                                    <ProfileViewCard
                                        userProfileImg={userProfile}
                                        userName="Chandrakanth Sharma"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col">
                                <div className="flex-grow">
                                    <ProfileViewCard
                                        userProfileImg={userProfile}
                                        userName="Chandrakanth Sharma"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default FreelancerApplicationViewPage;
