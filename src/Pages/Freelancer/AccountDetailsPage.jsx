import { Footer, LoggedInHeader, MyAccount } from "../../components";

const AccountDetailsPage = () => {
	return (
		<div className="flex flex-col min-h-screen">
			<div className="flex-grow">
				<LoggedInHeader
					includeNavBar={true}
					category="JOBS"
					isFreelancer={true}
				/>
				<MyAccount />
			</div>
			<Footer />
		</div>
	);
};

export default AccountDetailsPage;
