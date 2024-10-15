import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import SearchBar from "../components/forms/SearchBar";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function SearchPage() {
	const error = useSelector((state) => state.movies.error);
	const movies = useSelector((state) => state.movies.movies);
	const location = useLocation();

	return (
		<>
			<Helmet>
				{/* Basic meta */}
				<title>Search Movies & Shows - Find Information About Any Movie or TV Show</title>
				<meta
					name="description"
					content="Use our search tool to find detailed information about any movie or TV show. Browse through results and discover new favorites."
				/>

				{/* Open Graph / Facebook */}
				<meta property="og:title" content="Search Movies & Shows - Find Information About Any Movie or TV Show" />
				<meta
					property="og:description"
					content="Easily search and retrieve information on movies and TV shows. Discover your next favorite movie!"
				/>
				<meta property="og:url" content={location.pathname} />
				<meta property="og:type" content="website" />

				{/* Twitter / X */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Search Movies & Shows - Find Information About Any Movie or TV Show" />
				<meta
					name="twitter:description"
					content="Use our search tool to find detailed information about any movie or TV show. Browse results and find new favorites."
				/>
				<meta name="twitter:url" content={location.pathname} />
			</Helmet>

			<div className="w-fit mx-auto text-center">
				<h2 className="text-2xl sm:text-3xl md:text-5xl leading-none font-semibold font-serif uppercase px-2">
					search for any movie or show
				</h2>
			</div>
			<div className="flex flex-col gap-2 md:text-xl px-1 md:px-0 items-center">
				<SearchBar />
				<MovieList movies={movies} error={error} />
			</div>
		</>
	);
}
