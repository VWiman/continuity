import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

export default function FavoritesPage() {
	const movies = useSelector((state) => state.lists.favorites);
	const error = null;

	return (
		<>
			<div className="w-fit mx-auto text-center">
				<h2 className="text-2xl md:text-5xl font-semibold uppercase font-serif px-2">favorites</h2>
			</div>
			<MovieList movies={movies} error={error} />
		</>
	);
}
