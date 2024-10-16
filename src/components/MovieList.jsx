import { useState } from "react";
import MovieCard from "./MovieCard";
import Toast from "./Toast";

const MovieList = ({ movies, error }) => {
	const [isToastVisible, setIsToastVisible] = useState(false);
	const [toastMessage, setToastMessage] = useState("");

	// Display toast for 5 sec
	const showToast = (message) => {
			setToastMessage(message);
			setIsToastVisible(true);
			setTimeout(() => {
				setIsToastVisible(false);
			}, 5000);
		};


	// If there's an error and no movies, then display the error message
	if (error && movies.length === 0) {
		return <p>{error}</p>;
	}

	// Return the list of movies
	return (
		<ul id="movieList" className="flex flex-col gap-2 w-full h-fit">
			{movies.map((movie) => (
				<MovieCard key={movie.imdbID} movie={movie} showToast={showToast} />
			))}
			{/* Toast */}
			{isToastVisible && <Toast message={toastMessage} onClose={() => setIsToastVisible(false)} />}
		</ul>
	);
};

export default MovieList;
