import { EditProfileCard, Footer, LoggedInHeader } from "../../components";
import { userProfile, projectImg } from "../../components/Assets";

const ProjectGalleryPage = () => {
	return (
		<div className="flex flex-col min-h-screen bg-[#1A0142]">
			<LoggedInHeader
				includeNavBar={true}
				category="JOBS"
				isFreelancer={true}
			/>
			<div className="flex flex-wrap sm:space-x-20 sm:p-10 sm:w-3/4 m-auto">
				<div className="mx-auto">
					<EditProfileCard
						toHire={false}
						isEmployerProfile={false}
						userProfileImg={userProfile}
						userName="Chandrakanth Sharma"
						profession="Product Designer"
					/>
				</div>

				<div className="flex flex-col flex-wrap text-white sm:space-y-20 space-y-4 p-3">
					<p className="sm:text-5xl text-2xl text-white font-bold">
						PROJECT GALLERY
					</p>

					<div className="flex flex-col space-y-4">
						<p className="sm:text-4xl text-xl font-semibold p-2">
							Project Title
						</p>
						<div className="flex flex-wrap gap-y-4 space-x-2 sm:space-x-6 sm:py-6">
							<img
								className="sm:h-40 sm:w-40 w-24 h-24"
								src={projectImg}
								alt="project img"
							/>

							<img
								className="sm:h-40 sm:w-40 w-24 h-24"
								src={projectImg}
								alt="project img"
							/>

							<img
								className="sm:h-40 sm:w-40 w-24 h-24"
								src={projectImg}
								alt="project img"
							/>

							<img
								className="sm:h-40 sm:w-40 w-24 h-24"
								src={projectImg}
								alt="project img"
							/>
						</div>
					</div>

					<div className="flex flex-col space-y-4">
						<p className="sm:text-4xl text-xl font-semibold p-2">
							Project Title
						</p>
						<div className="flex flex-wrap gap-y-4 space-x-2 sm:space-x-6 sm:py-6">
							<img
								className="sm:h-40 sm:w-40 w-24 h-24"
								src={projectImg}
								alt="project img"
							/>

							<img
								className="sm:h-40 sm:w-40 w-24 h-24"
								src={projectImg}
								alt="project img"
							/>

							<img
								className="sm:h-40 sm:w-40 w-24 h-24"
								src={projectImg}
								alt="project img"
							/>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
};

export default ProjectGalleryPage;
