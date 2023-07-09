import React, { useState } from "react";

const FreelanceApplication = () => {
	const [files, setFiles] = useState([]);
	const [rate, setRate] = useState("");

	const handleFileUpload = (event) => {
		const uploadedFiles = Array.from(event.target.files);
		setFiles(uploadedFiles);
	};

	const handleRateChange = (event) => {
		setRate(event.target.value);
	};

	return (
		<div className="text-white leading-normal px-2 py-6 w-full">
			<h1 className="text-center sm:text-4xl text-2xl font-spaceGrotesk font-medium mb-8">
				PROPOSAL
			</h1>
			<div className="flex flex-wrap justify-between w-full sm:w-3/4 mx-auto">
				<div className="grid sm:grid-cols-6 gap-4 space-y-8 w-full sm:w-1/2">
					<div className="col-span-full">
						<label
							htmlFor="description"
							className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4"
						>
							Why are you fit for this job?
						</label>

						{window.innerWidth <= 640 ? (
							<textarea
								id="description"
								rows="4"
								className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-gray-900 sm:text-sm p-4 w-full"
								placeholder="Enter answer here"
							></textarea>
						) : (
							<textarea
								id="description"
								rows="6"
								className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-gray-900 sm:text-sm p-4 w-full"
								placeholder="Enter answer here"
							></textarea>
						)}
					</div>

					<div className="col-span-full">
						<label
							htmlFor="files"
							className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4"
						>
							Any files to support your proposal
						</label>
						<div className="flex items-center">
							<label
								htmlFor="file-upload"
								className="flex  p-2 h-10 border border-solid border-purple-500 rounded-md cursor-pointer w-full"
							>
								Upload
							</label>
							<input
								type="file"
								id="file-upload"
								onChange={handleFileUpload}
								className="hidden"
							/>
						</div>
					</div>

					<div className="col-span-full">
						<label
							htmlFor="rate"
							className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4"
						>
							What is your proposed rate?
						</label>
						<div className="grid grid-cols-8 gap-4">
							<div className="col-span-2">
								<div className="flex items-center">
									<input
										type="number"
										id="rate"
										value={rate}
										onChange={handleRateChange}
										className="p-2 bg-white border border-solid border-gray-300 rounded w-full"
										placeholder="USD"
									/>
								</div>
							</div>

							<div className="col-span-2">
								<div className="flex items-center">
									<select
										id="currency"
										className="p-2 bg-white border border-solid border-gray-300 rounded w-full"
									>
										<option value="USD">USD</option>
										<option value="EUR">EUR</option>
										{/* Add more currency options here */}
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="flex sm:flex-col flex-wrap justify-between items-center space-x-6 space-y-6 sm:space-y-8 mt-10">
					<div className="text-purple-500 text-xl font-GeneralSans font-medium space-y-2">
						<p className="text-center">Review Profile</p>
						<p className="text-center">View Job Requirements</p>
					</div>

					<div>
						<button className="text-white sm:text-2xl  px-4 py-3  text-base font-medium sm:py-4 sm:px-32 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
							APPLY
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FreelanceApplication;
