import { Footer, FreelanceApplication, LoggedInHeader } from "../../components";

const ApplyProposalPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex-grow">
				<LoggedInHeader
					includeNavBar={true}
					category="JOBS"
					isFreelancer={true}
				/>
				<FreelanceApplication />
			</div>
			<Footer />
		</div>
	);
};

export default ApplyProposalPage;
