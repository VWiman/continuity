import MovieCard from "./MovieCard";

const MovieList = ({ movies, error }) => {
	// If there's an error and no movies, then display the error message
	if (error && movies.length === 0) {
		return <p>{error}</p>;
	}

	// Return the list of movies
	return (
		<ul id="movieList" className="w-full h-fit">
			{movies.map((movie) => (
				<MovieCard key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
};

export default MovieList;
