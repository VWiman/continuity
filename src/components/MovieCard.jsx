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
		<li
			className="flex w-full justify-between p-4 my-8"
			key={movie.imdbID}>
			{movie.Poster && (
				<div className="w-16 md:w-32 -mr-20 md:-mr-32 -mt-4 mb-3 ml-2 md:ml-14 z-50 rounded-2xl overflow-hidden cursor-pointer shadow-sm shadow-black/80">
					<img className="aspect-auto h-full" src={movie.Poster} />
				</div>
			)}
			<div className="flex w-full p-4 pl-20 md:pl-36 bg-white rounded-xl hover:bg-gray-50 shadow-md select-none cursor-pointer items-center">
				<h3 className="flex flex-col mr-auto self-start">
					<span className="w-fit text-xs font-medium text-white bg-movie-red-600 leading-none px-1.5 py-1.5 uppercase rounded-md shadow shadow-black/20">
						{movie.Type}
					</span>
					<span className="text-sm md:text-xl font-semibold mt-2">{movie.Title}</span>
					<span className="text-xs md:text-md font-medium text-gray-400">{movie.Year}</span>
				</h3>
				{isFavorite ? (
					<Button type="icon" icon={Star} text={null} action={handleDeleteFromFavorites} />
				) : (
					<Button type="icon" icon={StarOutline} text={null} action={handleAddToFavorites} />
				)}
			</div>
		</li>
	);
};

export default MovieCard;
