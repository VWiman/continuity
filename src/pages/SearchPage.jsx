import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

export default function SearchPage() {
    const error = useSelector((state) => state.movies.error);
    const movies = useSelector((state) => state.movies.movies);
    
	return (
		<>
            <SearchBar />
			<MovieList movies={movies} error={error} />
		</>
	);
}
