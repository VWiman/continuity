import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";
import SearchBar from "../components/SearchBar";

export default function SearchPage() {
	const error = useSelector((state) => state.movies.error);
	const movies = useSelector((state) => state.movies.movies);

	return (
		<>
			<div className="w-fit mx-auto text-center">
				<h2 className="text-xl sm:text-2xl md:text-5xl font-semibold font-serif uppercase px-2">
					search for any movie or show
				</h2>
			</div>
			<div className="flex flex-col gap-2 md:text-xl px-4 md:px-0 items-center">
				<SearchBar />
				<MovieList movies={movies} error={error} />
			</div>
		</>
	);
}
