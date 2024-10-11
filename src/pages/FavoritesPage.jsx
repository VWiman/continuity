import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

export default function FavoritesPage() {
	const movies = useSelector((state) => state.lists.favorites);
	const error = null;

	return (
		<>
			<div className="w-fit mx-auto text-center">
				<h2 className="text-2xl md:text-4xl font-semibold uppercase">
					favorites
				</h2>
			</div>
			<MovieList movies={movies} error={error} />
		</>
	);
}
