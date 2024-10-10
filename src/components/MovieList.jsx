import MovieCard from "./MovieCard";

const MovieList = ({ movies, error }) => {
	if (error && movies.length === 0) {
		return <p>{error}</p>;
	}

	return (
		<ul className="movie-list">
			{movies.map((movie) => (
				<MovieCard key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
};

export default MovieList;
