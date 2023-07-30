import Box from "./Box";
import { apple, facebook, google } from "../Assets";
import { Link, useLocation } from "react-router-dom";

const SignUp = ({ isOtp, isWelcome }) => {
	const location = useLocation();
	const searchParams = new URLSearchParams(location.search);
	const isFreelancer = searchParams.get("isFreelancer") === "true";

	console.log("isFreelancer in SingUP : ", isFreelancer);

	return (
		// put mx-auto not mx-3(just for testing)
		<div className=" w-96 bg-white rounded-2xl border border-black py-6  mx-auto">
			<div className="flex flex-col items-center ">
				{isWelcome ? (
					<>
						{/* welcome message */}
						<p className="font-medium text-5xl  text-purple-600 py-2 font-spaceGrotesk">
							Welcome Back
						</p>
					</>
				) : (
					<>
						{/* Signup message */}
						<p className="font-medium text-5xl font-spaceGrotesk text-purple-600">
							Sign Up
						</p>
					</>
				)}

				{/* Facebook, Googel , Apple signup box */}
				<div className="flex flex-col gap-y-0 mt-4">
					<Box
						logo={facebook}
						name="Continue with Facebook"
						color="#4285F4"
						textColor="blue-600"
						logoWidth="2rem"
						logoHeight="2rem"
					/>

					<Box
						logo={google}
						name="Continue with Google"
						color="white"
						textColor="#63646B"
						logoWidth="2rem"
						logoHeight="2rem"
					/>

					<Box
						logo={apple}
						name="Continue with Apple"
						color="white"
						textColor="#63646B"
						logoWidth="2rem"
						logoHeight="2rem"
					/>
				</div>
				<p className="font-bold text-2xl leading-10 text-black">OR</p>

				{/* phone no. */}
				<input
					type="text"
					placeholder="Email"
					className="py-2 px-4 border text-xs w-72 h-10 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 m-2"
				/>

				{!isOtp ? (
					<div>
						{/* enter otp */}
						<div className="flex justify-center">
							<input
								type="text"
								placeholder="Enter Password"
								className="py-2 px-4  text-xs w-72 h-10 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 m-2"
							/>
						</div>

						{isWelcome ? (
							<>
								{/* checkbox */}
								<div className="flex items-center space-x-10 px-6 font-GeneralSans">
									<div className="flex items-center">
										<input
											type="checkbox"
											className="form-checkbox h-6 w-6  text-indigo-600"
										/>
										<span className="text-black font-semibold text-base m-2">
											Remember me
										</span>
									</div>
									<p className="font-medium text-base leading-8 text-purple-700">
										Forgot Password?
									</p>
								</div>

								{/* Login */}
								{isFreelancer ? (
									<div className="flex justify-center">
										<Link to="/freelancerLoggedInPage">
											<div className="flex justify-center p-4 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-60 m-4">
												<p className="font-medium text-3xl leading-12 text-white font-spaceGrotesk">
													Login
												</p>
											</div>
										</Link>
									</div>
								) : (
									<div className="flex justify-center">
										<Link to="/employerLoggedInPage">
											<div className="flex justify-center p-4 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-60 m-4">
												<p className="font-medium text-3xl leading-12 text-white font-spaceGrotesk">
													Login
												</p>
											</div>
										</Link>
									</div>
								)}
							</>
						) : (
							<>
								{/* checkbox */}
								<div className="flex items-center space-x-2">
									<input
										type="checkbox"
										className="form-checkbox h-6 w-6 text-indigo-600"
									/>
									<span className="text-black font-semibold text-sm m-2">
										I agree to the Grull User Policy Agreement
									</span>
								</div>

								{/* join grull */}
								{isFreelancer ? (
									<Link to="/freelancerLoggedInPage">
										<div className="flex justify-center p-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-60 m-2">
											<p className="font-medium text-2xl leading-10 text-white font-GeneralSans">
												Join Grull
											</p>
										</div>
									</Link>
								) : (
									<Link to="/employerLoggedInPage">
										<div className="flex justify-center p-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-60 m-2">
											<p className="font-medium text-2xl leading-10 text-white font-GeneralSans">
												Join Grull
											</p>
										</div>
									</Link>
								)}
							</>
						)}
					</div>
				) : (
					<div>
						{/* join grull */}
						{isWelcome ? (
							isFreelancer ? (
								<Link to="/logInEnterOtp?isFreelancer=true">
									<div className="flex justify-center p-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-72 m-2">
										<p className="font-medium text-2xl leading-10 text-white font-spaceGrotesk">
											REQUEST OTP
										</p>
									</div>
								</Link>
							) : (
								<Link to="/logInEnterOtp?isFreelancer=false">
									<div className="flex justify-center p-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-72 m-2">
										<p className="font-medium text-2xl leading-10 text-white font-spaceGrotesk">
											REQUEST OTP
										</p>
									</div>
								</Link>
							)
						) : isFreelancer ? (
							<Link to="/signUpEnterOtp?isFreelancer=true">
								<div className="flex justify-center p-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-72 m-2">
									<p className="font-medium text-2xl leading-10 text-white font-spaceGrotesk">
										REQUEST OTP
									</p>
								</div>
							</Link>
						) : (
							<Link to="/signUpEnterOtp?isFreelancer=false">
								<div className="flex justify-center p-2 bg-gradient-to-r from-purple-500 via-indigo-600 to-purple-800 rounded-lg w-72 m-2">
									<p className="font-medium text-2xl leading-10 text-white font-spaceGrotesk">
										REQUEST OTP
									</p>
								</div>
							</Link>
						)}
					</div>
				)}

				{/* add horizontal line here */}
				<div className="border-b-2 border-gray-300 w-80 m-2 font-GeneralSans"></div>
				{!isWelcome ? (
					<>
						{/* login part */}
						{isOtp ? (
							isFreelancer ? (
								<Link to="/logInRequestOtp?isFreelancer=true">
									<button className="text-lg">
										Already have an account?
										<span className="text-purple-700"> Log In</span>
									</button>
								</Link>
							) : (
								<Link to="/logInRequestOtp?isFreelancer=false">
									<button className="text-lg">
										Already have an account?
										<span className="text-purple-700"> Log In</span>
									</button>
								</Link>
							)
						) : isFreelancer ? (
							<Link to="/logInEnterOtp?isFreelancer=true">
								<button className="text-lg">
									Already have an account?
									<span className="text-purple-700"> Log In</span>
								</button>
							</Link>
						) : (
							<Link to="/logInEnterOtp?isFreelancer=false">
								<button className="text-lg">
									Already have an account?
									<span className="text-purple-700"> Log In</span>
								</button>
							</Link>
						)}
					</>
				) : (
					<>
						{/* login part */}
						<p className=" text-lg">
							Not a member yet?
							<span className="text-purple-700"> Sign Up</span>
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default SignUp;
