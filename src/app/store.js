import { configureStore } from "@reduxjs/toolkit";
import listsReducer from "../features/lists/listsSlice";
import moviesReducer from "../features/movies/moviesSlice";
import { saveState } from "../utils/localStorage";

const store = configureStore({
	reducer: {
		lists: listsReducer,
		movies: moviesReducer,
	},
});

store.subscribe(() => {
	const state = store.getState()
	saveState("lists", state.lists)
})

export default store