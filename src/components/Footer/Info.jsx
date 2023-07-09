const Info = ({ title, sub1, sub2 }) => {
	return (
		<div className="">
			<div className="flex flex-col items-center justify-center sm:space-y-4 space-y-2">
				{title && (
					<p className="font-medium sm:text-xl text-sm sm:leading-4 text-gray-600">
						{title}
					</p>
				)}
				<div className="flex flex-col items-center justify-center text-gray-500 text-sm ">
					{sub1 && <p className="text-center">{sub1}</p>}
					{sub2 && <p className=" text-center">{sub2}</p>}
				</div>
			</div>
		</div>
	);
};

export default Info;
