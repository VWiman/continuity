const MovieCard = ({ movie, id }) => {
	
    return (
		<li key={id}>
			<h3>
				{movie.Title}
				<span>&nbsp;({movie.Year})</span>
			</h3>
		</li>
	);
};

export default MovieCard;
