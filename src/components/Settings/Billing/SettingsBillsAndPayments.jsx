import { Link } from "react-router-dom";

const SettingsBillsAndPayments = () => {
	return (
		<div className="flex text-white items-center justify-between bg-[#1A0142] sm:w-3/4 mx-auto p-2">
			<div className="flex justify-center flex-col space-y-6 pt-20 font-semibold sm:justify-start text-sm">
				<button className="bg-purple-900 bg-opacity-70 border border-solid border-purple-500 rounded-lg sm:p-4 p-2 sm:w-48">
					My Account
				</button>

				<Link
					to="/cardDetails"
					className="bg-purple-900 text-center bg-opacity-30 rounded-lg border border-purple-600 sm:p-4 sm:w-48 p-2 bg-gradient-to-l from-purple-400 to-transparent"
				>
					Payment
				</Link>

				<button className="bg-purple-900 bg-opacity-30 rounded-lg border border-purple-600 sm:p-4 sm:w-48 p-2">
					Tax Information
				</button>
			</div>
			<div className="flex flex-col flex-wrap justify-center  sm:space-x-0 space-y-7 sm:leading-normal w-3/4 space-x-8">
				<p className="sm:text-3xl text-xl font-spaceGrotesk font-semibold">
					BILLING DETAILS
				</p>
				<div className="flex justify-between h-36 items-center flex-wrap p-4 bg-[#492772] bg-opacity-70 rounded-lg border border-purple-600">
					<p className="sm:text-xl text-center font-GeneralSans font-normal">
						You have not set up any billing method yet
					</p>
					<Link to="/editCardDetais">
						<button className="sm:text-xl   px-4 py-2 text-base font-medium rounded shadow bg-gradient-to-l from-purple-400 to-transparent font-spaceGrotesk">
							ADD BILLING METHOD
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SettingsBillsAndPayments;
