import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "../features/lists/listsSlice";
import moviesReducer from "../features/movies/moviesSlice";

const store = configureStore({
	reducer: {
		lists: listsReducer,
		movies: moviesReducer,
	},
});

export default store