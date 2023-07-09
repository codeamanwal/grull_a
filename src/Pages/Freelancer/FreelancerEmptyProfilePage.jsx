import {
	FreelancerEmptyProfile,
	Footer,
	LoggedInHeader,
} from "../../components";

const FreelancerEmptyProfilePage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<LoggedInHeader
				includeNavBar={true}
				category="JOBS"
				isFreelancer={true}
			/>
			<div className="flex-grow">
				<FreelancerEmptyProfile />
			</div>
			<Footer />
		</div>
	);
};

export default FreelancerEmptyProfilePage;
