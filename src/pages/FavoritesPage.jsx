import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

export default function FavoritesPage() {
	const movies = useSelector((state) => state.lists.favorites);
	const error = null
	
	return (
		<div>
			<MovieList movies={movies} error={error} />
		</div>
	);
}
