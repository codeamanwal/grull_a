import React from "react";
import { Link } from "react-router-dom";
import SkillsRequiredCard from "./SkillsRequiredCard";
import BrowseByCard from "./BrowseByCard";

const BrowseJobs = () => {
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
		<div className="">
			<div className="2xl:h-[913px] overflow-y-hidden">
				<div className="flex flex-wrap justify-between">
					{window.innerWidth <= 640 ? (
						<div className="flex flex-col bg-[#B37EE2] sm:p-12  p-6 sm:rounded-tl-3xl sm:rounded-bl-3xl mb-6 mx-auto">
							<BrowseByCard topic="CATEGORY" items={items1} />
							<BrowseByCard topic="LOCATION" items={items2} />
						</div>
					) : null}
					<div className="flex flex-col sm:pt-10 p-2">
						<div className="flex flex-wrap items-center justify-between">
							<p className="flex sm:text-4xl text-2xl text-white font-bold pl-6">
								POSTED JOBS
							</p>
							<div className="flex flex-col items-center">
								<p className="text-white sm:text-2xl font-semibold">
									Posted in the last &#x2191; 30 &#x2193; days
								</p>
							</div>
						</div>
						<Link to="/browseJobsInDetails">
							<SkillsRequiredCard isFreelancer={true} />
						</Link>
						<Link to="/browseJobsInDetails">
							<SkillsRequiredCard isFreelancer={true} />
						</Link>
						<Link to="/browseJobsInDetails">
							<SkillsRequiredCard isFreelancer={true} />
						</Link>
					</div>
					{window.innerWidth > 640 ? (
						<div className="flex flex-col bg-[#B37EE2] sm:p-12 rounded-tl-3xl rounded-bl-3xl">
							<BrowseByCard topic="CATEGORY" items={items1} />
							<BrowseByCard topic="LOCATION" items={items2} />
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default BrowseJobs;
