import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";

const MovieList = (movies) => {
	if (!movies || movies.length === 0) {
		return <p>No movies found.</p>;
	}

	console.log(movies.movies);

	return (
		<ul className="movie-list">
			{movies.movies.map((movie) => (
				<MovieCard key={movie.imdbID} id={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
};

export default MovieList;
