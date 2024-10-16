import { useDispatch, useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import SearchBar from "../components/forms/SearchBar";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function SearchPage() {
	const error = useSelector((state) => state.movies.error);
	const movies = useSelector((state) => state.movies.movies);
	const location = useLocation();

	// State to store the filtered movies
	const [filteredMovies, setFilteredMovies] = useState(movies);

	// Update filteredMovies state when the movies state changes
	useEffect(() => {
		setFilteredMovies(movies);
	}, [movies]);

	// Function to filter the movies based on type
	function handleFilter(type) {
		// Filter the movies and update the state
		const updatedMovies = movies.filter((item) => item.Type === type);
		setFilteredMovies(updatedMovies);
	}

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
				<h2 className="text-2xl sm:text-3xl md:text-5xl font-black tracking-wide leading-none uppercase px-2">
					search for any
					<button
						onClick={() => handleFilter("movie")}
						className="text-white bg-movie-red-600 px-2 mx-1 leading-snug rounded-xl uppercase my-1 md:my-0">
						movie
					</button>
					,
					<button
						onClick={() => handleFilter("series")}
						className="text-white bg-green-600 px-2 mx-1 leading-snug rounded-xl uppercase my-1 md:my-0">
						series
					</button>
					or
					<button
						onClick={() => handleFilter("game")}
						className="text-white bg-blue-600 px-2 mx-1 leading-snug rounded-xl uppercase my-1 md:my-0">
						game
					</button>
				</h2>
			</div>
			<div className="flex flex-col gap-2 md:text-xl px-1 md:px-0 items-center">
				<SearchBar />
				<MovieList movies={filteredMovies} error={error} />
			</div>
		</>
	);
}
