import React from "react";
import BrowseByCard from "../BrowseJobs/BrowseByCard";

const BrowseFreelancers = () => {
    const items1 = [
        "Graphic Designer",
        "Illustrator",
        "Programmer",
        "Video Editor",
        "3D artist",
        "Product Designer",
    ];

    const items2 = ["India", "USA", "Canada", "England", "China", "Russia"];

    return (
        <div>
            <div className="flex flex-col bg-[#B37EE2] p-12 sm:rounded-tl-3xl sm:rounded-bl-3xl">
                <BrowseByCard topic="CATEGORY" items={items1} />
                <BrowseByCard topic="LOCATION" items={items2} />
            </div>
        </div>
    );
};

export default BrowseFreelancers;
