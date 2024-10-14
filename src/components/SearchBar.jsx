import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice";
import SubmitButton from "./buttons/SubmitButton";

const SearchBar = () => {
	const [searchText, setSearchText] = useState("");
	const dispatch = useDispatch();

	// Handle search form on submit
	const handleSearch = (e) => {
		e.preventDefault();
		setSearchText(searchText.trim());
		if (searchText.length > 0) {
			dispatch(fetchMovies(searchText));
		}
	};

	// Form for searching movies
	return (
		<form className="flex w-fit gap-4 justify-center items-center" onSubmit={(e) => handleSearch(e)}>
			<input
				id="searchInput"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				placeholder="Search for a movie..."
				className="p-1.5 text-md m-0 rounded-lg shadow-black/30 shadow-inner outline-none"></input>
			<SubmitButton text="search" action={null} />
		</form>
	);
};

export default SearchBar;
