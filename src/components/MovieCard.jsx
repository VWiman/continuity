import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Star from "./icons/Star";
import StarOutline from "./icons/StarOutline";
import Modal from "./modals/Modal";
import { addToList, removeFromList } from "../features/lists/listsSlice";
import { fetchMovieDetails } from "../features/movies/movieDetailsSlice";
import IconButton from "./buttons/IconButton";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import DetailsButton from "./buttons/DetailsButton";
import Spinner from "./icons/Spinner";
import ModalPopup from "./modals/ModalPopup";
import AddMovieForm from "./forms/AddMovieForm";
import Edit from "./icons/Edit";
import ModalEdit from "./modals/ModalEdit";

const MovieCard = ({ movie, showToast }) => {
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.lists.favorites);
	const [movieDetails, setMovieDetails] = useState(null);
	const movieDetailsError = useSelector((state) => state.movieDetails.error);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isModalPopupOpen, setIsModalPopupOpen] = useState(false);
	const location = useLocation();
	const [isAddingFavorite, setIsAddingFavorite] = useState(false);
	const [isEditModalOpen, setIsEditModalOpen] = useState(false);
	const noImage = "/temp.webp";

	// Handle the editing modal and fetch from local or api to fill in existing fields
	const handleOpenEditModal = (e) => {
		e.stopPropagation();

		if (!movieDetails) {
			const loadedDetails = favorites.find((item) => item.imdbID === movie.imdbID);
			if (loadedDetails) {
				setMovieDetails(loadedDetails);
				setIsEditModalOpen(true);
			} else {
				dispatch(fetchMovieDetails(movie.imdbID))
					.then((result) => {
						setMovieDetails(result.payload);
						setIsEditModalOpen(true);
					})
					.catch((error) => {
						console.error("Failed to fetch movie details:", error);
					});
			}
		} else {
			setIsEditModalOpen(true);
		}
	};

	// Close editing modal
	const handleCloseEditModal = () => {
		setIsEditModalOpen(false);
	};

	// Check if the movie is in the favorites list
	const isFavorite = favorites.some((item) => item.imdbID === movie.imdbID);

	// Fetch movie details when the modal is opened
	useEffect(() => {
		if ((isModalOpen || isEditModalOpen) && movie) {
			const loadedDetails = favorites.find((item) => item.imdbID === movie.imdbID);
			if (loadedDetails) {
				setMovieDetails(loadedDetails);
			} else {
				dispatch(fetchMovieDetails(movie.imdbID))
					.then((result) => {
						setMovieDetails(result.payload);
					})
					.catch((error) => {
						console.error("Failed to fetch movie details:", error);
					});
			}
		}
	}, [isModalOpen, isEditModalOpen, dispatch, movie, favorites]);

	// Add movie to favorites (and fetch details)
	useEffect(() => {
		if (isAddingFavorite) {
			async function fetchFavorite() {
				try {
					// Fetch the movie details
					const result = await dispatch(fetchMovieDetails(movie.imdbID)).unwrap();
					// Add the detailed movie to the favorites list
					const movieObject = { listName: "favorites", movie: result };
					dispatch(addToList(movieObject));
					// Show the toast
					showToast(`Added ${movie.Title} to favorites`);
				} catch (error) {
					// Show error if it fails
					showToast(movieDetailsError || "An error occurred while adding to favorites.");
				} finally {
					setIsAddingFavorite(false);
				}
			}
			// Call the async function
			fetchFavorite();
		}
	}, [isAddingFavorite]);

	// Add movie to favorites list
	function handleAddToFavorites(e) {
		e.stopPropagation();
		if (!isAddingFavorite) {
			setIsAddingFavorite(true);
		}
	}

	// Remove movie from favorites list
	function handleDeleteFromFavorites(e) {
		e.stopPropagation();
		showToast(`Removed ${movie.Title} from favorites`);
		const movieObject = { listName: "favorites", movie: movie };
		dispatch(removeFromList(movieObject));
		setIsModalPopupOpen(false);
	}

	// Open the modal
	function handleOpenModal() {
		setIsModalOpen(true);
	}

	// Close the modal
	function handleCloseModal() {
		setIsModalOpen(false);
	}

	// Open the modalPopup
	function handleOpenModalPopup(e) {
		e.stopPropagation();
		setIsModalPopupOpen(true);
	}

	// Close the modalPopup
	function handleCloseModalPopup() {
		setIsModalPopupOpen(false);
	}

	return (
		<li className="flex w-full justify-between p-4 movieItem" key={movie.imdbID}>
			<div className="min-w-16 max-w-16 max-h-[100px] sm:max-h-full md:max-w-28 -mr-24 md:-mr-32 -mt-4 mb-3 ml-2 md:ml-14 z-50 rounded-2xl overflow-hidden shadow-sm shadow-black/80">
				<img className="h-full aspect-auto" src={movie.Poster ? movie.Poster : noImage} alt={movie.Title} />
			</div>
			<div className="flex w-full p-4 pl-20 md:pl-36 bg-white rounded-xl hover:bg-white/95 shadow-md select-none items-center hover:shadow-none outline-4 hover:outline outline-black/10">
				<h3 className="flex flex-col mr-auto self-start">
					<span className="w-fit text-[8px] md:text-xs font-medium text-white bg-movie-red-600 leading-none px-1.5 py-1.5 uppercase rounded-md shadow shadow-black/20">
						{movie.Type}
					</span>
					<span className="text-sm md:text-xl font-semibold mt-2">{movie.Title}</span>
					<span className="text-xs md:text-md font-medium text-gray-400">{movie.Year}</span>
				</h3>

				{/* {Edit} */}
				{location.pathname === "/favorites" && (
					<i className="self-start md:self-center mr-2 -mb-1 -ml-8">
						{isFavorite && <IconButton text={<Edit />} action={handleOpenEditModal} />}
					</i>
				)}

				{/* Spinner, star or filled star */}
				<i className="self-start md:self-center mr-2 -mb-1">
					{isAddingFavorite ? (
						<Spinner />
					) : isFavorite ? (
						<IconButton text={<Star />} action={handleOpenModalPopup} />
					) : (
						<IconButton text={<StarOutline />} action={handleAddToFavorites} />
					)}
				</i>
				<DetailsButton type={null} icon={null} text="Details" action={handleOpenModal} />
			</div>
			{/* Popup Modal for delete */}
			<ModalPopup isOpen={isModalPopupOpen} onClose={handleCloseModalPopup} onAction={handleDeleteFromFavorites} />
			{/* Details Modal */}
			<Modal isOpen={isModalOpen} onClose={handleCloseModal}>
				{movieDetails !== null && movieDetails.Actors ? (
					<div className="flex flex-col item-center my-3 w-full">
						{isModalOpen && (
							<Helmet>
								<title>{`${movieDetails.Title} - Movie Details`}</title>
								<meta name="description" content={`${movieDetails.Plot}`} />
								<meta property="og:title" content={`${movieDetails.Title} - Movie Details`} />
								<meta property="og:description" content={`${movieDetails.Plot}`} />
								<meta property="og:image" content={movie.Poster} />
								<meta property="og:type" content="movie" />
								<meta property="og:url" content={location.pathname} />
								<meta name="twitter:card" content="summary_large_image" />
								<meta name="twitter:title" content={`${movieDetails.Title} - Movie Details`} />
								<meta name="twitter:description" content={`${movieDetails.Plot}`} />
								<meta name="twitter:image" content={movie.Poster} />
								<meta name="twitter:url" content={location.pathname} />
							</Helmet>
						)}

						<div className="w-full flex flex-col justify-center items-center sm:flex-row">
							<div className="w-auto sm:mr-4 mb-4 sm:mb-0 rounded-2xl shadow-sm shadow-black/80 border-4">
								<div className="w-48 sm:w-56 rounded-2xl overflow-hidden">
									<img src={movie.Poster ? movie.Poster : noImage} alt={movie.Title} className="w-full" />
								</div>
							</div>

							<ul className="flex flex-col h-full justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs md:text-sm bg-black text-white p-4 sm:py-6 sm:px-8 rounded-2xl shadow-sm shadow-black/80 text-center sm:text-left w-48 sm:w-auto mx-h-[320px] tracking-wide">
								<li className="flex flex-col sm:gap-1">
									<span className="font-semibold uppercase tracking-wider leading-none">Director</span>
									<span className="text-[8px] sm:text-xs">{movieDetails.Director}</span>
								</li>
								<li className="flex flex-col sm:gap-1">
									<span className="font-semibold uppercase tracking-wider leading-none">Actors</span>
									<span className="text-[8px] sm:text-xs">{movieDetails.Actors}</span>
								</li>
								<li className="flex flex-col sm:gap-1">
									<span className="font-semibold uppercase tracking-wider leading-none">Genre</span>
									<span className="text-[8px] sm:text-xs">{movieDetails.Genre}</span>
								</li>
								<li className="flex flex-col sm:gap-1">
									<span className="font-semibold uppercase tracking-wider leading-none">Released</span>
									<span className="text-[8px] sm:text-xs">{movieDetails.Released}</span>
								</li>
								<li className="flex flex-col sm:gap-1">
									<span className="font-semibold uppercase tracking-wide leading-none">IMDB Rating</span>
									<span className="text-[8px] sm:text-xs">{movieDetails.imdbRating}</span>
								</li>
							</ul>
						</div>

						<div className="w-full mt-4">
							<h4 className="text-2xl md:text-4xl font-bold text-center">{movieDetails.Title}</h4>
							<p className="text-sm sm:text-lg text-center mx-auto max-w-2xl mt-2">{movieDetails.Plot}</p>
						</div>
					</div>
				) : (
					<div className="flex w-screen text-center h-32 justify-center items-center">
						<p className="text-center">Loading...</p>
					</div>
				)}
			</Modal>
			{/* Edit modal */}
			{isEditModalOpen && ( 
				<ModalEdit isOpen={isEditModalOpen} onClose={handleCloseEditModal}>
					<AddMovieForm onClose={handleCloseEditModal} existingMovieData={movieDetails} isEditing={true} />
				</ModalEdit>
			)}
		</li>
	);
};

export default MovieCard;
