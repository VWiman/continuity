import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToList, updateMovieInList } from "../../features/lists/listsSlice";
import Close from "../icons/Close";
import DetailsButton from "../buttons/DetailsButton";

const AddMovieForm = ({ onClose, existingMovieData = null, isEditing = false }) => {
	const dispatch = useDispatch();
	const [formError, setFormError] = useState("");

	// Initialize state with existing movie data if editing
	const [movieData, setMovieData] = useState(() => {
		return isEditing && existingMovieData
			? { ...existingMovieData }
			: {
					Title: "",
					Year: "",
					imdbID: "",
					Type: "movie",
					Poster: "",
					Director: "",
					Actors: "",
					Genre: "",
					Plot: "",
					imdbRating: "",
			  };
	});

	useEffect(() => {
		if (isEditing && existingMovieData) {
			setMovieData(existingMovieData);
		}
	}, [isEditing, existingMovieData]);

	// Updated Unique ID generation function
	function generateUniqueId() {
		return Date.now().toString(36) + Math.random().toString(36).slice(2);
	}

	const handleChange = (e) => {
		setMovieData({
			...movieData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Assign a unique ID if adding a new movie
		const newMovieData = {
			...movieData,
			imdbID: isEditing ? movieData.imdbID : generateUniqueId(),
		};

		// Validation
		const { Title, Year, Director, Actors, Genre, Plot, imdbRating } = newMovieData;

		if (!Title || !Year || !Director || !Actors || !Genre || !Plot || !imdbRating) {
			setFormError("Please fill in all required fields.");
			return;
		}

		if (isEditing) {
			// Dispatch action to update the movie
			dispatch(updateMovieInList({ listName: "favorites", movie: newMovieData }));
		} else {
			// Dispatch action to add new movie
			dispatch(addToList({ listName: "favorites", movie: newMovieData }));
		}

		// Close the modal
		onClose();
	};

	return (
		<div
			className="fixed inset-0 z-[100] h-screen min-h-full flex items-center justify-center bg-white md:bg-black md:bg-opacity-50 backdrop-blur-sm mb-auto"
			onClick={onClose}>
			<div className="flex w-full h-full justify-center overflow-scroll">
				<div
					className="relative flex flex-col w-fit self-center items-center justify-center bg-white rounded-lg md:shadow-lg"
					onClick={(e) => e.stopPropagation()}>
					<button className="absolute top-3 right-3 text-black text-2xl" onClick={onClose}>
						<Close />
					</button>
					<div className="flex flex-col justify-center items-center w-fit p-4">
						<form onSubmit={handleSubmit} className="w-[300px] text-sm leading-none">
							<h4 className="flex gap-2 leading-none font-semibold">{isEditing ? "Edit Movie" : "Add a New Movie"}</h4>
							{formError && <p className="text-red-500">{formError}</p>}

							<label className="flex flex-col gap-2 py-0.5 my-1">
								Title:
								<input
									className=" outline outline-gray-200 p-1"
									type="text"
									name="Title"
									value={movieData.Title}
									onChange={handleChange}
									required
								/>
							</label>
							<label className="flex flex-col gap-2 py-0.5 my-1">
								Year:
								<input
									className=" outline outline-gray-200 p-1"
									type="text"
									name="Year"
									value={movieData.Year}
									onChange={handleChange}
									required
								/>
							</label>
							<label className="flex flex-col gap-2 py-0.5 my-1">
								Director:
								<input
									className=" outline outline-gray-200 p-1"
									type="text"
									name="Director"
									value={movieData.Director}
									onChange={handleChange}
									required
								/>
							</label>
							<label className="flex flex-col gap-2 py-0.5 my-1">
								Actors:
								<input
									className=" outline outline-gray-200 p-1"
									type="text"
									name="Actors"
									value={movieData.Actors}
									onChange={handleChange}
									required
								/>
							</label>
							<label className="flex flex-col gap-2 py-0.5 my-1">
								Genre:
								<input
									className=" outline outline-gray-200 p-1"
									type="text"
									name="Genre"
									value={movieData.Genre}
									onChange={handleChange}
									required
								/>
							</label>
							<label className="flex flex-col gap-2 py-0.5 my-1">
								Plot:
								<textarea name="Plot" value={movieData.Plot} onChange={handleChange} required />
							</label>
							<label className="flex flex-col gap-2 py-0.5 my-1">
								IMDb Rating:
								<input
									className=" outline outline-gray-200 p-1"
									type="text"
									name="imdbRating"
									value={movieData.imdbRating}
									onChange={handleChange}
									required
								/>
							</label>
							<label className="flex flex-col gap-2 py-0.5 my-1">
								Poster URL:
								<input
									className=" outline outline-gray-200 p-1"
									type="text"
									name="Poster"
									value={movieData.Poster}
									onChange={handleChange}
								/>
							</label>
							<div className="flex w-full items-center justify-end pt-2 md:pt-0">
								<DetailsButton text={isEditing ? "Update Movie" : "Add to Favorites"} action={null} type="submit" />
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AddMovieForm;
