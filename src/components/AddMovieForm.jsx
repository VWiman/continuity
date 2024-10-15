import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToList } from "../features/lists/listsSlice";

const AddMovieForm = ({ onClose }) => {
	const dispatch = useDispatch();

	// Updated Unique ID generation function
	function generateUniqueId() {
		return Date.now().toString(36) + Math.random().toString(36).slice(2);
	}

	const [movieData, setMovieData] = useState({
		Title: "",
		Year: "",
		imdbID: "",
		Type: "",
		Poster: "",
		Director: "",
		Actors: "",
		Genre: "",
		Plot: "",
		imdbRating: "",
	});

	const handleChange = (e) => {
		setMovieData({
			...movieData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Validation
		if ((!Title || !Year || !imdbID || !Type || !Poster || !Director || !Actors || !Genre || !Plot || !imdbRating)) {
			return;
		}

		// Assign a unique ID
		movieData.imdbID = generateUniqueId();

		// Dispatch action to add to favorites
		dispatch(addToList({ listName: "favorites", movie: movieData }));

		// Close the modal
		onClose();
	};

	return (
		<form onSubmit={handleSubmit}>
			<h2>Add a New Movie</h2>
			<label>
				Title*:
				<input type="text" name="Title" value={movieData.Title} onChange={handleChange} required />
			</label>
			<label>
				Year*:
				<input type="text" name="Year" value={movieData.Year} onChange={handleChange} required />
			</label>
			<label>
				Director:
				<input type="text" name="Director" value={movieData.Director} onChange={handleChange} />
			</label>
			<label>
				Actors:
				<input type="text" name="Actors" value={movieData.Actors} onChange={handleChange} />
			</label>
			<label>
				Genre:
				<input type="text" name="Genre" value={movieData.Genre} onChange={handleChange} />
			</label>
			<label>
				Plot:
				<textarea name="Plot" value={movieData.Plot} onChange={handleChange} />
			</label>
			<label>
				IMDb Rating:
				<input type="text" name="imdbRating" value={movieData.imdbRating} onChange={handleChange} />
			</label>
			{/* Add more fields as necessary */}
			<button type="submit">Add to Favorites</button>
		</form>
	);
};

export default AddMovieForm;
