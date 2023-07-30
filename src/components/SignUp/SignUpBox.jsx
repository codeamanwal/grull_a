import { Link } from "react-router-dom";

const SignUpBox = () => {
	return (
		<div className="text-center md:max-w-4xl w-auto bg-transparent overflow-hidden rounded-2xl md:border-2 border-solid border-purple-600 md:p-10 py-5 mx-auto">
			<h2 className="text-purple-500 md:text-4xl text-2xl font-medium font-spaceGrotesk">
				SIGN UP
			</h2>

			<div className="flex flex-wrap md:flex-row items-center justify-center md:space-x-40 px-4 py-6">
				<div className="space-y-3 flex flex-col justify-center items-center">
					<p className="flex flex-col text-white md:text-2xl font-medium font-GeneralSans">
						I am looking for jobs
					</p>
					<Link to="/signUpEnterOtp?isFreelancer=true">
						<button className="text-white md:text-xl font-spaceGrotesk font-medium px-6 py-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
							SIGN UP AS A FREELANCER
						</button>
					</Link>
				</div>

				<div className="mt-8 md:mt-0 space-y-3 flex flex-col justify-center items-center">
					<p className="text-white md:text-2xl font-medium font-GeneralSans">
						I want to post jobs
					</p>

					<Link to="/signUpEnterOtp?isFreelancer=false">
						<button className="text-white md:text-xl font-spaceGrotesk font-medium px-6 py-2 rounded shadow bg-gradient-to-l from-purple-400 to-transparent">
							SIGN UP AS AN EMPLOYER
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SignUpBox;
