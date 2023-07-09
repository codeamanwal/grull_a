import {
	FreelancerFileSharing,
	Footer,
	LoggedInHeader,
} from "../../components";

const FreelancerFileSharingPage = () => {
	return (
		<div className="flex flex-col min-h-screen bg-[#1A0142]">
			<LoggedInHeader
				includeNavBar={true}
				category="FREELANCER"
				isFreelancer={false}
			/>
			<div className="flex-grow overflow-y-auto">
				<FreelancerFileSharing />
			</div>
			<Footer />
		</div>
	);
};

export default FreelancerFileSharingPage;
