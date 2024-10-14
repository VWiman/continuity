import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

export default function FavoritesPage() {
	const movies = useSelector((state) => state.lists.favorites);
	const error = null;
	const location = useLocation();

	return (
		<>
			<Helmet>
				{/* Basic meta */}
				<title>Your Favorite Movies - Track and View Your Favorites</title>
				<meta
					name="description"
					content="View all your favorite movies in one place. Easily manage and keep track of your top picks."
				/>
				{/* Open Graph / Facebook */}
				<meta property="og:title" content="Your Favorite Movies - Track and View Your Favorites" />
				<meta
					property="og:description"
					content="Access your list of favorite movies. Keep track of all the movies you love in one convenient place."
				/>
				<meta property="og:url" content={location.pathname} />
				<meta property="og:type" content="website" />

				{/* Twitter / X */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="Your Favorite Movies - Track and View Your Favorites" />
				<meta
					name="twitter:description"
					content="View and manage your list of favorite movies. Keep track of your favorites in one place."
				/>
				<meta name="twitter:url" content={location.pathname} />
			</Helmet>

			<div className="w-fit mx-auto text-center">
				<h2 className="text-2xl md:text-5xl font-semibold uppercase font-serif px-2">favorites</h2>
			</div>
			<MovieList movies={movies} error={error} />
		</>
	);
}
