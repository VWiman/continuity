import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies } from "../features/movies/moviesSlice";
import Button from "./Button";

const SearchBar = () => {
	const [searchText, setSearchText] = useState("");
	const dispatch = useDispatch();

	const handleSearch = (e) => {
		e.preventDefault();
		setSearchText(searchText.trim());
		if (searchText.length > 0) {
			dispatch(fetchMovies(searchText));
		}
	};

	return (
		<form className="flex w-fit gap-4 justify-center items-center" onSubmit={(e) => handleSearch(e)}>
			<input
				id="searchInput"
				value={searchText}
				onChange={(e) => setSearchText(e.target.value)}
				placeholder="Search for a movie..."
				className="p-1.5 rounded-xl shadow-black/15 shadow-inner outline-none"></input>
			<Button type="submit" icon={null} text="search" action={null} />
		</form>
	);
};

export default SearchBar;
