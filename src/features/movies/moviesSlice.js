import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

// Search for movie by title using thunkAPI and reject with value
export const fetchMovies = createAsyncThunk("movies/fetchMovies", async (searchValue, thunkAPI) => {
	try {
		const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`);

		// Throw error if fetch failed
		if (!response.ok) {
			throw new Error(`Failed to fetch: ${response.statusText}`);
		}

		// Handle the response
		const result = await response.json();

		// Throw error if result does not include a response or it could not be extracted
		if (result.Response === "False") {
			return thunkAPI.rejectWithValue(result.Error);
		}

		// Return the result if there are no errors
		console.log(result.Search);
		return result.Search;

		// Throw error if there is no response
	} catch (error) {
		return thunkAPI.rejectWithValue(`Failed to get response: ${error.message}`);
	}
});

// Create initial state for fetched movies
const initialState = {
	movies: [],
	status: "idle", // "idle" | "loading" | "succeeded" | "failed"
	error: null,
};

// Create a slice with functions to clear fetched movies and handle fetch
// Also handle errors and status
const moviesSlice = createSlice({
	name: "movies",
	initialState,
	reducers: {
		clearMovies: (state) => {
			state.movies = [];
			state.status = "idle";
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovies.pending, (state) => {
				state.status = "loading";
				state.movies = [];
				state.error = null;
			})
			.addCase(fetchMovies.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.movies = action.payload;
				state.error = null;
			})
			.addCase(fetchMovies.rejected, (state) => {
				state.status = "failed";
				state.error = "Failed to fetch movies";
			});
	},
});

export const { clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
