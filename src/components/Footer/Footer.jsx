import Info from "./Info";
import {
	facebook2,
	grullLogo,
	linkedin,
	twitter,
	pinterest,
	instagram,
	globe,
} from "../Assets";

const Footer = () => {
	return (
		<footer className="flex flex-col bg-white items-center py-3">
			<div className="w-full py-4 sm:px-16 grid grid-cols-4 sm:gap-4 gap-2 px-2">
				<Info title="ABOUT" sub1="Terms & Conditions" sub2="Privacy Policy" />
				<Info title="SUPPORT" sub1="FAQ’s" sub2="Customer Help" />
				<Info title="COMMUNITY" sub1="Whitepaper" sub2="Hire on GRULL" />
				<Info title="ESSENTIALS" sub1="Whitepaper" />
			</div>

			<div className="border border-gray-300 sm:w-5/6 w-full"></div>

			<div className="flex justify-between w-full items-center sm:w-4/5 px-3">
				<img
					className="sm:w-20 sm:h-20 w-14 h-14 object-fit"
					src={grullLogo}
					alt="grull"
				/>
				<div className="flex items-center sm:space-x-9 space-x-2">
					<div className="flex justify-center items-center md:space-x-5 space-x-2">
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={twitter} alt="twitter" />
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={facebook2} alt="facebook" />
						</a>
						<a
							href="https://linkedin.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={linkedin} alt="linkedin" />
						</a>
						<a
							href="https://pinterest.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={pinterest} alt="pinterest" />
						</a>
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={instagram} alt="instagram" />
						</a>
					</div>
					<div className="flex items-center">
						<img src={globe} alt="globe" />
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
