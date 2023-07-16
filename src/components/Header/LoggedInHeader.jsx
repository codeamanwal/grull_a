import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { grullLogo, bell, user } from "../Assets";

const LoggedInHeader = ({ includeNavBar, category, isFreelancer }) => {
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const dropdownRef = useRef(null);

	const toggleDropdown = () => {
		setIsDropdownOpen(!isDropdownOpen);
	};

	const handleClickOutside = (event) => {
		if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
			setIsDropdownOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener("click", handleClickOutside);
		return () => {
			window.removeEventListener("click", handleClickOutside);
		};
	}, []);

	return (
		<header className=" fixed top-0 left-0 w-full z-50">
			<div className="flex items-center justify-between px-4 sm:px-8 bg-[#080112] text-white w-full">
				<Link to="/">
					<img
						className="h-16 w-16 sm:h-24 sm:w-24 object-fit"
						src={grullLogo}
						alt="logo"
					/>
				</Link>

				{includeNavBar && (
					<nav className=" flex justify-end sm:pl-6 w-3/4 sm:w-full">
						<ul className="flex space-x-4 sm:space-x-8 justify-end items-center gap-4 sm:gap-8">
							{/* <li className="sm:w-auto w-1/4">
							<Link
								to={isFreelancer ? "/browseJobs" : "/browseFreelancers"}
								className="text-white hover:text-gray-400 font-semibold text-sm sm:text-xl inline-block"
							>
								BROWSE {category}
							</Link>
						</li> */}

							{category === "JOBS" ? (
								<li className="">
									<Link
										to={isFreelancer ? "/browseJobs" : "/browseFreelancers"}
										className="text-white hover:text-gray-400 font-semibold text-base sm:text-xl inline-block"
									>
										BROWSE {category}
									</Link>
								</li>
							) : (
								<li className="sm:w-auto w-1/4 mr-3">
									<Link
										to={isFreelancer ? "/browseJobs" : "/browseFreelancers"}
										className="text-white hover:text-gray-400 font-semibold text-sm sm:text-xl inline-block"
									>
										BROWSE {category}
									</Link>
								</li>
							)}
							{category !== "JOBS" && !isFreelancer && (
								<li className="sm:w-auto  w-1/12 mr-3">
									<Link
										to="/postJob"
										className="text-white hover:text-gray-400 font-semibold text-sm sm:text-xl inline-block"
									>
										POST JOBS
									</Link>
								</li>
							)}

							<li>
								<img
									className="h-6 w-6 sm:h-8 sm:w-8 object-fit"
									src={bell}
									alt="bell"
								/>
							</li>

							<li className="relative" ref={dropdownRef}>
								<button
									className="flex items-center focus:outline-none"
									onClick={toggleDropdown}
								>
									<img
										className="h-6 w-6 sm:h-8 sm:w-8 object-fit cursor-pointer"
										src={user}
										alt="user"
									/>
								</button>
								{isDropdownOpen &&
									(isFreelancer ? (
										<ul className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-2 z-50">
											<li>
												<p className="block px-4 py-2 text-sm leading-5 text-gray-800 hover:bg-gray-100 font-bold">
													Account
												</p>
											</li>
											<li>
												<Link
													to="/freelancerEmptyProfile"
													className="block px-4 py-1 text-sm leading-5 text-gray-800 hover:bg-gray-100"
												>
													Manage Profile
												</Link>
											</li>
											<li>
												<Link
													to="/accountDetails"
													className="block px-4 py-1 text-sm leading-5 text-gray-800 hover:bg-gray-100"
												>
													Account Details
												</Link>
											</li>
											<li>
												<Link
													to="/freelancerFileSharing?isFreelancer=true"
													className="block px-4 py-1 text-sm leading-5 text-gray-800 hover:bg-gray-100"
												>
													Settings
												</Link>
											</li>
											<li className="mt-2">
												<p className="block px-4 py-2 text-sm leading-5 text-gray-800 hover:bg-gray-100 font-bold">
													Finances
												</p>
											</li>
											<li>
												<Link
													to="/"
													className="block px-4 py-1 text-sm leading-5 text-gray-800 hover:bg-gray-100"
												>
													Balance
												</Link>
											</li>
											<li>
												<Link
													to="/"
													className="block px-4 py-1 text-sm leading-5 text-gray-800 hover:bg-gray-100"
												>
													Withdraw Funds
												</Link>
											</li>
											<li>
												<Link
													to="/"
													className="block px-4 py-1 text-sm leading-5 text-gray-800 hover:bg-gray-100"
												>
													Add Funds
												</Link>
											</li>
											<li>
												<Link
													to="/"
													className="block px-4 py-1 text-sm leading-5 text-gray-800 hover:bg-gray-100"
												>
													Transaction History
												</Link>
											</li>
											<hr className="flex justify-center items-center w-3/4 ml-4 my-2 border-1 border-black" />
											<li>
												<Link
													to="/"
													className="block px-4 py-2 text-sm leading-5 text-gray-800 hover:bg-gray-100 font-bold"
												>
													LOGOUT
												</Link>
											</li>
										</ul>
									) : (
										<ul className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded shadow-lg py-2 z-50">
											<li>
												<p className="block px-4 py-2 text-sm leading-5 text-gray-800 hover:bg-gray-100 font-bold">
													Account
												</p>
											</li>
											<li>
												<Link
													to="/employerProfile"
													className="block px-4 py-1 text-sm leading-5 text-gray-800 hover:bg-gray-100"
												>
													Manage Profile
												</Link>
											</li>
											<li>
												<Link
													to="/freelancerFileSharing?isFreelancer=false"
													className="block px-4 py-1 text-sm leading-5 text-gray-800 hover:bg-gray-100"
												>
													Settings
												</Link>
											</li>

											<hr className="flex justify-center items-center w-3/4 ml-4 my-2 border-1 border-black" />
											<li>
												<Link
													to="/"
													className="block px-4 py-2 text-sm leading-5 text-gray-800 hover:bg-gray-100 font-bold"
												>
													LOGOUT
												</Link>
											</li>
										</ul>
									))}
							</li>
						</ul>
					</nav>
				)}
			</div>
		</header>
	);
};

export default LoggedInHeader;
