import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../utils/localStorage";

// Load saved lists
const savedListsState = loadState("lists");

// Create initialState
const initialState = savedListsState || {
	favorites: [],
};

// Create a slice with functions to add and remove movies from favorites
const listsSlice = createSlice({
	name: "lists",
	initialState,
	reducers: {

		addToList: (state, action) => {
			const { listName, movie } = action.payload;
			if (!state[listName].find((item) => item.imdbID === movie.imdbID)) {
				state[listName].push(movie);
				console.log(movie.Title, " added to ", listName);
			}
		},

		removeFromList: (state, action) => {
			const { listName, movie } = action.payload;
			state[listName] = state[listName].filter((item) => item.imdbID !== movie.imdbID);
			console.log(movie.Title, " removed from ", listName);
		},
	},
});

export const { addToList, removeFromList } = listsSlice.actions;
export default listsSlice.reducer;
