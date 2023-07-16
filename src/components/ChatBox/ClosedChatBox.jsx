import React from "react";
import { hrProfile } from "../Assets";

const ClosedChatBox = ({ arrow, onClick }) => {
	const handleArrowClick = () => {
		onClick(true);
	};

	return (
		<div className="flex items-center bg-white px-4 py-2 w-72 justify-between">
			<div className="relative">
				<div className="rounded-full h-12 w-12 bg-gray-300">
					<img
						src={hrProfile}
						alt="Profile"
						className="h-full w-full rounded-ful object-cover"
					/>
					<div className="absolute bg-green-500 w-3 h-3 rounded-lg top-1 -right-1 transform rotate-35"></div>
				</div>
			</div>
			<span className="ml-2 text-xl font-bold  ">Chat Box</span>
			<img
				src={arrow}
				className="h-8 w-8 cursor-pointer"
				alt="down arrow"
				onClick={handleArrowClick}
			/>
		</div>
	);
};

export default ClosedChatBox;
