import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

export default function FavoritesPage() {
	const movies = useSelector((state) => state.lists.favorites);
	const error = null;

	return (
		<>
			<MovieList movies={movies} error={error} />
		</>
	);
}
