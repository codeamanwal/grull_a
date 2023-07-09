const Features = ({ logo, title, subtitle }) => {
	return (
		<div className="sm:p-8 p-3">
			{title && subtitle && (
				<div className="flex flex-col items-center">
					<img
						className="sm:h-32  sm:w-32 sm:object-fit  sm:object-cover w-24 h-24 my-2"
						src={logo}
						alt="earn-more"
					/>
					<h3 className="font-semibold text-white sm:text-xl py-2">{title}</h3>
					<p className="text-white text-sm leading-4 text-center">{subtitle}</p>
				</div>
			)}
		</div>
	);
};

export default Features;
