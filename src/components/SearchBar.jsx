import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice";

const SearchBar = () => {
	const [searchText, setSearchText] = useState("");
	const dispatch = useDispatch();

	const handleSearch = (e) => {
        e.preventDefault();
        setSearchText(searchText.trim())
        if (searchText.length > 0) {
            dispatch(fetchMovies(searchText))
        }
	};

	return (
		<form onSubmit={(e) => handleSearch(e)}>
			<input
				id="searchInput"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				placeholder="Search for a movie..."></input>
			<button type="submit">Search</button>
		</form>
	);
};

export default SearchBar;
