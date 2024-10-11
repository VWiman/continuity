// MovieCard.js
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Button from "./buttons/Button";
import Star from "./icons/Star";
import StarOutline from "./icons/StarOutline";
import Modal from "./Modal";
import { addToList, removeFromList } from "../features/lists/listsSlice";
import { fetchMovieDetails } from "../features/movies/movieDetails";
import IconButton from "./buttons/IconButton";

const MovieCard = ({ movie }) => {
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.lists.favorites);
	const movieDetails = useSelector((state) => state.movieDetails.movie);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const isFavorite = favorites.some((item) => item.imdbID === movie.imdbID);

	useEffect(() => {
		if (isModalOpen) {
			dispatch(fetchMovieDetails(movie.imdbID));
		}
	}, [isModalOpen, dispatch, movie.imdbID]);

	function handleAddToFavorites(e) {
		e.stopPropagation();
		const movieObject = { listName: "favorites", movie: movie };
		dispatch(addToList(movieObject));
	}

	function handleDeleteFromFavorites(e) {
		e.stopPropagation();
		const movieObject = { listName: "favorites", movie: movie };
		dispatch(removeFromList(movieObject));
	}

	function handleOpenModal() {
		setIsModalOpen(true);
	}

	function handleCloseModal() {
		setIsModalOpen(false);
	}

	return (
		<li className="flex w-full justify-between p-4 my-8" key={movie.imdbID}>
			{movie.Poster && (
				<div className="min-w-16 max-w-16 max-h-[100px] sm:max-h-full md:max-w-28 -mr-24 md:-mr-32 -mt-4 mb-3 ml-2 md:ml-14 z-50 rounded-2xl overflow-hidden cursor-pointer shadow-sm shadow-black/80">
					<img className="h-full aspect-auto" src={movie.Poster} alt={movie.Title} />
				</div>
			)}
			<div className="flex w-full p-4 pl-20 md:pl-36 bg-white rounded-xl hover:bg-gray-50 shadow-md select-none cursor-pointer items-center">
				<h3 className="flex flex-col mr-auto self-start">
					<span className="w-fit text-[8px] md:text-xs font-medium text-white bg-movie-red-600 leading-none px-1.5 py-1.5 uppercase rounded-md shadow shadow-black/20">
						{movie.Type}
					</span>
					<span className="text-sm md:text-xl font-semibold mt-2">{movie.Title}</span>
					<span className="text-xs md:text-md font-medium text-gray-400">{movie.Year}</span>
				</h3>
				<i className="self-start md:self-center mr-4 -mb-1">
					{isFavorite ? (
						<IconButton text={Star} action={handleDeleteFromFavorites} />
					) : (
						<IconButton text={StarOutline} action={handleAddToFavorites} />
					)}
				</i>
				<Button type={null} icon={null} text="Details" action={handleOpenModal} />
			</div>
			<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
				{movieDetails.Actors ? (
					<div className="flex flex-col item-center my-3 w-full">
						{/* Container with Flex for Image and Movie Details */}
						<div className="w-full flex flex-col justify-center items-center sm:flex-row">
							{/* Image Container */}
							<div className="w-auto sm:mr-4 mb-4 sm:mb-0 rounded-2xl shadow-sm shadow-black/80 border-4">
								<div className="w-48 sm:w-56 rounded-2xl overflow-hidden">
									<img src={movie.Poster} alt={movie.Title} className="w-full" />
								</div>
							</div>

							{/* Movie Details to the Right of the Image */}
							<ul className="flex flex-col h-full justify-center gap-2 text-xs sm:text-sm bg-stone-300 p-4 sm:py-6 sm:px-8 rounded-2xl shadow-sm shadow-black/80 text-center sm:text-left w-48 sm:w-auto mx-h-[320px]">
								<li className="flex flex-col sm:gap-2">
									<span className="font-semibold uppercase tracking-wide leading-none">Director</span>
									{movieDetails.Director}
								</li>
								<li className="flex flex-col sm:gap-2">
									<span className="font-semibold uppercase tracking-wide leading-none">Actors</span>
									{movieDetails.Actors}
								</li>
								<li className="flex flex-col sm:gap-2">
									<span className="font-semibold uppercase tracking-wide leading-none">Genre</span>
									{movieDetails.Genre}
								</li>
								<li className="flex flex-col sm:gap-2">
									<span className="font-semibold uppercase tracking-wide leading-none">Released</span>
									{movieDetails.Released}
								</li>
								<li className="flex flex-col sm:gap-2">
									<span className="font-semibold uppercase tracking-wide leading-none">IMDB Rating</span>
									{movieDetails.imdbRating}
								</li>
							</ul>
						</div>

						{/* Title and Description Below Image and Details */}
						<div className="w-full mt-4">
							<h4 className="text-2xl md:text-4xl font-bold text-center">{movieDetails.Title}</h4>
							<p className="text-xs sm:text-base text-center mx-auto max-w-2xl mt-2">{movieDetails.Plot}</p>
						</div>
					</div>
				) : (
					<div className="flex w-full text-center h-32 justify-center items-center">
						<p>Loading...</p>
					</div>
				)}
			</Modal>
		</li>
	);
};

export default MovieCard;
