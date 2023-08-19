import React from "react";
import PropTypes from "prop-types";
import JobDetailsCard from "./JobDetailsCard";
import { ClosedChatBox, OpenedChatBox } from "../../components";
import { downarrow } from "../../components/Assets";
import { Link } from "react-router-dom";

var BrowseJobInDetails = ({ isFreelancer, isOpen, setIsOpen }) => {
    return (
        <div className="flex  flex-wrap sm:justify-between  justify-center sm:w-11/12 mx-auto py-28 space-y-10">
            <JobDetailsCard isFreelancer={isFreelancer} />

            {isFreelancer ? (
                <div className="flex sm:flex-col flex-wrap sm:justify-start sm:space-y-10">
                    <button className="text-white sm:text-xl font-semibold sm:px-12 sm:py-2 px-4  py-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
						MANAGE PROFILE
                    </button>
                    <button className="text-white sm:text-xl font-semibold  sm::px-8 sm:py-2 px-4 py-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
						BROWSE MORE JOBS
                    </button>
                </div>
            ) : (
                <div className="flex flex-col  justify-between items-center space-y-4 ">
                    <div className="flex flex-col items-center   space-y-5 sm:justify-start sm:space-y-10 sm:mb-[73px]">
                        <Link
                            to="/freelancerApplicationView"
                            className="text-white sm:text-xl font-semibold md:px-8 py-4 px-2 sm:px-12 rounded shadow bg-gradient-to-l from-purple-400 to-transparent"
                        >
							VIEW FREELANCER APPLICATIONS
                        </Link>
                        <button className="text-white sm:text-xl font-semibold md:px-8 py-4 sm:px-12  px-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
							MANAGE POSTED JOB
                        </button>
                    </div>

                    <div className="">
                        {isOpen ? (
                            <OpenedChatBox setIsOpen={setIsOpen} />
                        ) : (
                            <ClosedChatBox arrow={downarrow} onClick={setIsOpen} />
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

BrowseJobInDetails.propTypes = {
    isFreelancer: PropTypes.bool,
    isOpen: PropTypes.bool,
    setIsOpen: PropTypes.func
};

export default BrowseJobInDetails;
