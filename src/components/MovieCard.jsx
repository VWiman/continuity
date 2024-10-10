import { useDispatch, useSelector } from "react-redux";
import Button from "./Button";
import Star from "./icons/Star";
import { addToList, removeFromList } from "../features/lists/listsSlice";
import StarOutline from "./icons/StarOutline";

const MovieCard = ({ movie }) => {
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.lists.favorites);

	const isFavorite = favorites.some((item) => item.imdbID === movie.imdbID);

	function handleAddToFavorites() {
		const movieObject = { listName: "favorites", movie: movie };
		dispatch(addToList(movieObject));
	}

	function handleDeleteFromFavorites() {
		const movieObject = { listName: "favorites", movie: movie };
		dispatch(removeFromList(movieObject));
	}

	return (
		<li key={movie.imdbID}>
			<h3>
				<span>{movie.Title}</span>
				<span>&nbsp;({movie.Year})</span>
			</h3>
			{isFavorite ? (
				<Button type="icon" icon={Star} text={null} action={handleDeleteFromFavorites} />
			) : (
				<Button type="icon" icon={StarOutline} text={null} action={handleAddToFavorites} />
			)}
		</li>
	);
};

export default MovieCard;
