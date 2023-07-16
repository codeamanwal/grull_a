import React from "react";
import { nasa } from "../Assets";

const GrowingTogetherFooter = () => {
	return (
		<div className="w-full bg-white p-4 rounded-t-3xl">
			<p className="flex items-center justify-center w-full text-center font-medium sm:text-4xl text-2xl sm:leading-96 text-purple-600">
				GROWING TOGETHER WITH
			</p>

			<div className="border-b-2 border-gray-300 w-full my-3"></div>

			<div className="grid grid-cols-4 sm:grid-cols-8 gap-4 justify-between mt-4 mx-auto max-w-7xl">
				{Array.from({ length: 8 }).map((_, index) => (
					<a
						key={index}
						className="flex items-center justify-center text-gray-400 hover:text-gray-200"
						href="https://ploi.io"
						target="_blank"
						rel="noreferrer"
						title="Ploi"
					>
						<img className="sm:w-24 sm:h-24 w-20 h-20" src={nasa} alt="nasa" />
					</a>
				))}
			</div>
		</div>
	);
};

export default GrowingTogetherFooter;
