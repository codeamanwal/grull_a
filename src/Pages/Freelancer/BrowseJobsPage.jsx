import { BrowseJobs, Footer, LoggedInHeader } from "../../components";

const BrowseJobsPage = () => {
	return (
		<div className="flex flex-col min-h-screen bg-[#1A0142]">
			<LoggedInHeader
				includeNavBar={true}
				category="JOBS"
				isFreelancer={true}
			/>
			<div className="flex-grow">
				<BrowseJobs />
			</div>
			<Footer />
		</div>
	);
};

export default BrowseJobsPage;
