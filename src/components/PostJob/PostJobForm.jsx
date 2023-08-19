import React from "react";
const PostJobForm = () => {
    return (
        <div className="flex flex-col flex-wrap  text-white sm:space-y-7 sm:w-3/4 w-full mx-auto font-GeneralSans p-3">
            <p className="text-center sm:text-4xl  text-2xl font-bold font-spaceGrotesk py-4">
				JOB DESCRIPTION
            </p>
            <div className="grid sm:grid-cols-8  sm:gap-6 gap-3">
                {/* Title */}
                <div className="sm:col-span-4 flex flex-col space-y-2  justify-center">
                    <label
                        htmlFor="title"
                        className="font-semibold sm:text-xl font-spaceGrotesk"
                    >
						Title
                    </label>
                    <input
                        id="title"
                        // rows="6"
                        className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-gray-900 sm:text-sm sm:p-4  p-2 sm:w-full"
                        placeholder="Enter"
                    ></input>
                </div>

                {/* Add Skills Required */}
                <div className="sm:col-span-4 flex flex-col space-y-2  justify-center">
                    <label
                        htmlFor="skills"
                        className="font-semibold  sm:text-xl font-spaceGrotesk"
                    >
						Add Skills Required
                    </label>
                    <input
                        id="skills"
                        // rows="6"
                        className="bg-[#1A0142] border border-solid border-[#B1B1B1]  rounded-lg text-gray-900 sm:text-sm sm:p-4 p-2 sm:w-full"
                        placeholder="Enter"
                    ></input>
                </div>

                {/* Job Category */}
                <div className="sm:col-span-4 flex  flex-col space-y-2 justify-center">
                    <label
                        htmlFor="catagory"
                        className="font-semibold  sm:text-xl font-spaceGrotesk"
                    >
						Job Category
                    </label>
                    <input
                        id="catagory"
                        // rows="6"
                        className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-gray-900 sm:text-sm sm:p-4 p-2 sm:w-full"
                        placeholder="Select"
                    ></input>
                </div>

                {/* Refrence Files */}
                <div className="sm:col-span-4 flex flex-col space-y-2 justify-center">
                    <label
                        htmlFor="files"
                        className="font-semibold sm:text-xl font-spaceGrotesk "
                    >
						Refrence Files
                    </label>
                    <input
                        id="files"
                        // rows="6"
                        className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-gray-900 sm:text-sm sm:p-4 p-2 sm:w-full"
                        placeholder="Upload"
                    ></input>
                </div>

                {/* Location */}
                <div className="sm:col-span-2 flex  flex-col space-y-2  justify-center">
                    <label
                        htmlFor="location"
                        className="font-semibold sm:text-xl font-spaceGrotesk"
                    >
						Location
                    </label>
                    <input
                        id="location"
                        // rows="6"
                        className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-gray-900 sm:text-sm sm:p-4  p-2 sm:w-full"
                        placeholder="Select"
                    ></input>
                </div>

                {/* Duration */}
                <div className="sm:col-span-2 flex  flex-col space-y-2 justify-center ">
                    <label
                        htmlFor="duration"
                        className="font-semibold sm:text-xl font-spaceGrotesk"
                    >
						Duration
                    </label>
                    <input
                        id="diration"
                        // rows="6"
                        className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-gray-900 sm:text-sm sm:p-4  p-2 sm:w-full"
                        placeholder="Select"
                    ></input>
                </div>

                {/* Company Name */}
                <div className="sm:col-span-4 flex flex-col space-y-2 justify-center ">
                    <label
                        htmlFor="compnayname"
                        className="font-semibold  sm:text-xl font-spaceGrotesk"
                    >
						Company Name (optional)
                    </label>
                    <input
                        id="compnayname"
                        // rows="6"
                        className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-gray-900 sm:text-sm sm:p-4 p-2 sm:w-full"
                        placeholder="Enter Name"
                    ></input>
                </div>

                {/* Budget */}
                <div className="sm:col-span-4 flex flex-col space-y-2 justify-center">
                    <label
                        htmlFor="compnayname"
                        className="font-semibold sm:text-xl font-spaceGrotesk"
                    >
						Budget
                    </label>
                    <div className="grid sm:grid-cols-5 grid-cols-3 gap-4">
                        <div className=" sm:col-span-2 flex flex-col space-y-2  justify-center">
                            <input
                                id="currency"
                                // rows="6"
                                className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-gray-900 sm:text-sm sm:p-4  p-2 sm:w-full"
                                placeholder="USD"
                            ></input>
                        </div>

                        <div className=" sm:col-span-2 flex flex-col space-y-2  justify-center">
                            <input
                                id="empty"
                                // rows="6"
                                className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-gray-900 sm:text-sm sm:p-4 p-2 sm:w-full"
                            ></input>
                        </div>

                        <div className="sm:col-span-1 flex flex-col space-y-2  justify-center ">
                            <label
                                htmlFor="checkbox "
                                className="flex justify-center items-center space-x-2"
                            >
                                <input
                                    id="checkbox"
                                    type="checkbox"
                                    className="rounded bg-[#1A0142] text-purple-500 p-2 w-10 h-10"
                                />
                                <span className="sm:ml-2">NEGOTIABLE</span>
                            </label>
                        </div>
                    </div>
                </div>

                <div className="sm:col-span-4 flex flex-col space-y-2 justify-center">
                    <label
                        htmlFor="description"
                        className="font-semibold block sm:text-xl font-spaceGrotesk"
                    >
						About Company (optional)
                    </label>
                    <textarea
                        id="description"
                        rows="4"
                        className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-gray-900 sm:text-sm sm:p-4 p-2 sm:w-full"
                        placeholder="Type here"
                    ></textarea>
                </div>

                <div className="sm:col-span-4  flex flex-col space-y-2 justify-center">
                    <label
                        htmlFor="jobDescription"
                        className="font-semibold block sm:text-xl font-spaceGrotesk"
                    >
						Job Description
                    </label>
                    <textarea
                        id="jobDescription"
                        rows="4"
                        className="bg-[#1A0142] border border-solid border-[#B1B1B1] rounded-lg text-gray-900 sm:text-sm sm:p-4 p-2 sm:w-full"
                        placeholder="Type here"
                    ></textarea>
                </div>

                <div className="sm:col-start-8 sm:col-span-2 sm:self-end flex justify-center">
                    <button className="text-white sm:text-2xl text-base font-semibold p-3 mt-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent sm:py-2 sm:w-full">
						POST JOB
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PostJobForm;
