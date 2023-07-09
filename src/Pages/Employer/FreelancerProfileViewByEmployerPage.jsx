import { EditProfile, LoggedInHeader, Footer } from "../../components";

const FreelancerProfileViewByEmployerPage = () => {
	return (
		<div className="bg-[#1A0142] flex flex-col min-h-screen">
			<LoggedInHeader
				includeNavBar={true}
				category="FREELANCER"
				isFreelancer={false}
			/>
			<div className="flex-grow">
				<EditProfile isFreelancer={false} toHire={false} />
			</div>
			<Footer />
		</div>
	);
};

export default FreelancerProfileViewByEmployerPage;
