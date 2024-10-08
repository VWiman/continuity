import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

export default function SearchPage() {
    const error = useSelector((state) => state.movies.error);
    const movies = useSelector((state) => state.movies.movies);
    
	return (
        <div>  
            <h2>search for any movie or show</h2>
            <SearchBar />
			<MovieList movies={movies} error={error} />
		</div>
	);
}
