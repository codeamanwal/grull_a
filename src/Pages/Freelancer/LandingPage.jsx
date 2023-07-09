import {
	LoginSignUpHeader,
	LoggedInHeader,
	Footer,
	Hero,
	WhyGrull,
	ExploreCategories,
} from "../../components";

const LandingPage = ({ isLoggedIn, category, isFreelancer }) => {
	return (
		<div>
			{isLoggedIn ? (
				<LoggedInHeader
					includeNavBar={true}
					category={category}
					isFreelancer={isFreelancer}
				/>
			) : (
				<LoginSignUpHeader />
			)}

			<Hero />
			<ExploreCategories />
			<WhyGrull />
			<Footer />
		</div>
	);
};

export default LandingPage;
