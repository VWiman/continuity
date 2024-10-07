import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/user/userSlice";
import listsReducer from "../features/lists/listsSlice";
import moviesReducer from "../features/movies/moviesSlice";

const store = configureStore({
	reducer: {
		lists: listsReducer,
		movies: moviesReducer,
		user: userReducer,
	},
});

export default store