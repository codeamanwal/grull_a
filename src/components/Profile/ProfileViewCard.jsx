import { useState } from "react";
import { youtube, twitter, facebook2 } from "../Assets";

const ProfileViewCard = ({
	userProfileImg,

	userName,
}) => {
	const [isEditing, setIsEditing] = useState(false);

	return (
		<div className="flex sm:px-6 sm:py-3 px-2  text-white">
			<div className="flex flex-col items-center space-y-2 xl:space-y-6 bg-[#482773] rounded-lg lg:mt-0 xl:p-10 m-4 py-3">
				<img
					className="rounded-full sm:h-72 sm:w-72 w-36 h-36 p-2"
					src={userProfileImg}
					alt="author avatar"
				/>
				<div className="text-center font-bold sm:text-2xl text-xl font-spaceGrotesk">
					{userName}
				</div>
				<div className="sm:text-xl text-base font-GeneralSans font-normal">
					30USD/Per Hour
				</div>
				<div className=" text-base text-center font-GeneralSans font-normal">
					I have had an inclination towards art and design since childhood and
					have grown to have a high level of liking and skill set to nurture
					this talent. A sense of aesthetics always came naturally to me
				</div>

				<div className="flex flex-col space-y-6">
					<p className="text-[#b27ee3] text-xl font-normal">VIEW SAMPLE WORK</p>
					<button className="text-white text-center text-xl font-medium rounded shadow bg-gradient-to-l from-purple-400 to-transparent py-2 w-full ">
						MESSAGE
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProfileViewCard;
