import ProfileCard from "./ProfileCard";
import { plus, upArrow } from "../Assets";
import { useState } from "react";

const FreelancerEmptyProfile = () => {
	const [skills, setSkills] = useState([""]);
	const [languages, setLanguages] = useState([""]);
	const [images, setImages] = useState([null]);

	const handleChange = (index, event, field) => {
		if (field === "skills") {
			const updatedSkills = [...skills];
			updatedSkills[index] = event.target.value;
			setSkills(updatedSkills);
		} else if (field === "languages") {
			const updatedLanguages = [...languages];
			updatedLanguages[index] = event.target.value;
			setLanguages(updatedLanguages);
		}
	};

	const handleAddField = (field) => {
		if (field === "skills") {
			setSkills([...skills, ""]);
		} else if (field === "languages") {
			setLanguages([...languages, ""]);
		}
	};

	const handleImageUpload = (index) => (event) => {
		const file = event.target.files[0];
		const updatedImages = [...images];
		updatedImages[index] = URL.createObjectURL(file);
		setImages(updatedImages);
	};

	return (
		<div className="flex flex-wrap bg-[#1A0142] sm:w-3/4 sm:mx-auto  text-white 2xl:h-[913px] p-10">
			<ProfileCard />

			{/* form */}
			<div className="p-6 space-y-6 flex-grow">
				<div className="grid  grid-cols-1 sm:grid-cols-4 gap-8 sm:w-3/4 mx-auto">
					<div className="sm:col-span-4">
						<label
							htmlFor="description"
							className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4"
						>
							Description
						</label>
						<textarea
							id="description"
							rows="4"
							className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-gray-900 sm:text-sm block w-full p-4"
							placeholder="Write about you..."
						></textarea>
					</div>

					<div className="sm:col-span-2">
						<label
							htmlFor="skills"
							className="font-semibold block mb-2 text-xl font-spaceGrotesk"
						>
							Skills
						</label>
						{skills.map((skill, index) => (
							<input
								key={index}
								type="text"
								name="skills"
								id={`skill-${index}`}
								value={skill}
								onChange={(event) => handleChange(index, event, "skills")}
								className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-gray-900 sm:text-sm block w-full p-2.5 my-2"
								required=""
							/>
						))}
						<div className="flex items-center justify-center mt-2">
							<button
								type="button"
								onClick={() => handleAddField("skills")}
								className="text-white rounded-full p-2"
							>
								<img src={plus} alt="plus" />
							</button>
						</div>
					</div>

					<div className="sm:col-span-2">
						<label
							htmlFor="languages"
							className="font-semibold block mb-2 text-xl font-spaceGrotesk"
						>
							Languages
						</label>
						{languages.map((language, index) => (
							<input
								key={index}
								type="text"
								name="languages"
								id={`language-${index}`}
								value={language}
								onChange={(event) => handleChange(index, event, "languages")}
								className="bg-[#1A0142] border border-solid border-purple-500 rounded-lg text-gray-900 sm:text-sm block w-full p-2.5 my-2"
								required=""
							/>
						))}
						<div className="flex items-center justify-center mt-2">
							<button
								type="button"
								onClick={() => handleAddField("languages")}
								className="text-white rounded-full p-2"
							>
								<img src={plus} alt="plus" />
							</button>
						</div>
					</div>

					<div className="col-span-full">
						<label
							htmlFor="portfolio"
							className="font-semibold block mb-2 text-xl font-spaceGrotesk pb-4"
						>
							Ongoing Work/ Portfolio
						</label>
						<div className="flex items-center">
							{images.map((image, index) => (
								<label
									key={index}
									htmlFor={`image-${index}`}
									className="mr-2 cursor-pointer"
								>
									<img
										src={image ? image : upArrow}
										alt={`Portfolio ${index + 1}`}
										className="sm:w-44 sm:h-44 object-fit rounded-md border border-solid border-purple-500 p-2"
									/>
								</label>
							))}
							<input
								type="file"
								accept="image/*"
								id={`image-${images.length - 1}`}
								onChange={handleImageUpload(images.length - 1)}
								className="hidden"
							/>
							<button
								type="button"
								onClick={() => setImages([...images, null])}
								className="text-white rounded-full p-2"
							>
								<img src={plus} alt="plus" />
							</button>
						</div>
					</div>
				</div>
			</div>

			<div className="pt-10 pl-10">
				<a
					href="/freelancerEditProfile"
					className="text-white text-xl font-medium py-2 px-16 rounded shadow bg-gradient-to-l from-purple-400 to-transparent"
				>
					DONE
				</a>

				<p className="text-[#B27EE3] text-lg font-medium font-spaceGrotesk pt-8">
					SWITCH TO AN EMPLOYER
				</p>
			</div>
		</div>
	);
};

export default FreelancerEmptyProfile;
