import MovieCard from "./MovieCard";

const MovieList = ({ movies, error }) => {
	if (error && movies.length === 0) {
		return <p>{error}</p>;
	}

	return (
		<ul id="movieList" className="w-full h-fit">
			{movies.map((movie) => (
				<MovieCard key={movie.imdbID} movie={movie} />
			))}
		</ul>
	);
};

export default MovieList;
