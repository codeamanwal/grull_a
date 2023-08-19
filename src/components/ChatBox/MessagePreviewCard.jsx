import React from "react";
import { hrProfile } from "../Assets";

const MessagePreviewCard = () => {
    return (
        <div>
            <div className="flex items-center justify-between bg-white rounded-lg px-4 ">
                <div className="rounded-full h-12 w-12 bg-gray-300">
                    <img
                        src={hrProfile}
                        alt="Profile"
                        className="h-full w-full rounded-full object-cover"
                    />
                </div>
                <div className="flex flex-col justify-start">
                    <p className="font-medium">Name Surname</p>
                    <p className="text-gray-500 text-sm">Message preview here...</p>
                </div>
                <p>Nov 9</p>
            </div>
            <hr className="flex mx-auto w-[90%]  py-2 px-4 my-2 border-1 border-black" />
        </div>
    );
};

export default MessagePreviewCard;
