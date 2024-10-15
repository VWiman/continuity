import { useLocation, useNavigate } from "react-router-dom";
import CtaButton from "../components/buttons/CtaButton";
import { Helmet } from "react-helmet-async";

export default function HomePage() {
	const navigate = useNavigate();
	const location = useLocation();

	const handleButtonClick = () => {
		navigate("/search");
	};

	return (
		<>
			<Helmet>
				{/* Basic meta */}
				<title>Movie Continuity - Track Your Favorites</title>
				<meta
					name="description"
					content="Maintain movie watching continuity and track your favorite movies with Continuity. Search for any movie and retrieve detailed information."
				/>
				{/* Open Graph / Facebook */}
				<meta property="og:title" content="Movie Continuity - Track Your Favorites" />
				<meta
					property="og:description"
					content="Search and track your favorite movies with Continuity. Easily maintain movie continuity and discover more."
				/>
				<meta property="og:url" content={location.pathname} />
				<meta property="og:type" content="website" />

				{/* Twitter / X */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Movie Continuity - Track Your Favorites" />
				<meta
					name="twitter:description"
					content="Search and track your favorite movies with Continuity. Easily maintain movie continuity and discover more."
				/>
				<meta name="twitter:url" content={location.pathname} />
			</Helmet>

			<div className="w-fit mx-auto text-center">
				<h2 className="text-2xl sm:text-3xl md:text-5xl leading-none font-semibold font-serif uppercase px-2">
					maintain <span className="text-white bg-movie-red-600 px-2 rounded-xl">movie</span> continuity and track your{" "}
					<span className="text-yellow-400 bg-black px-2 rounded-xl">favorites</span>
				</h2>
			</div>
			<div className="flex flex-col w-fit gap-4 md:mx-auto py-4 items-center">
				<p className="flex flex-col gap-1 md:text-xl px-4 md:px-0 text-center">
					<span>Continuity lets you search for any movie and retrive information about it.</span>
					<span>You can favorite movies to remember the good ones.</span>
				</p>
				<CtaButton text="go to search" action={handleButtonClick} />
			</div>
		</>
	);
}
