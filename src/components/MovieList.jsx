import { useLocation } from "react-router-dom";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, error }) => {
	const location = useLocation();

	if (error && movies.length === 0) {
		return <p>{error}</p>;
	}

	return location.pathname == "/search" ? (
		<ul className="movie-list">
			{movies.map((movie) => (
				<MovieCard key={movie.imdbID} id={movie.imdbID} movie={movie} />
			))}
		</ul>
	) : (
		<></>
	);
};

export default MovieList;
