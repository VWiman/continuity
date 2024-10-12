import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

// Search for movie by title using thunkAPI and reject with value
export const fetchMovieDetails = createAsyncThunk("movies/fetchMovieDetails", async (searchValue, thunkAPI) => {
	try {
		const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${searchValue}`);

		// Throw error if fetch failed
		if (!response.ok) {
			throw new Error(`Failed to fetch: ${response.statusText}`);
		}

		const result = await response.json();

		// Throw error if result does not include a response or it could not be extracted
		if (result.Response === "False") {
			return thunkAPI.rejectWithValue(result.Error);
		}

		// Return the result if there are no errors
		console.log(result);
		return result;
		// Throw error if there is no response
	} catch (error) {
		return thunkAPI.rejectWithValue(`Failed to get response: ${error.message}`);
	}
});

// Create initial state for fetched movies
const initialState = {
	movie: {},
	status: "idle", // "idle" | "loading" | "succeeded" | "failed"
	error: null,
};

// Create a slice with functions to clear fetched movies and handle fetch
const movieDetailsSlice = createSlice({
	name: "movieDetails",
	initialState,
	reducers: {
		clearMovieDetails: (state) => {
			state.movie = {};
			state.status = "idle";
			state.error = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchMovieDetails.pending, (state) => {
				state.status = "loading";
                state.movie = {};
				state.error = null;
			})
			.addCase(fetchMovieDetails.fulfilled, (state, action) => {
				state.status = "succeeded";
				state.movie = action.payload;
				state.error = null;
			})
			.addCase(fetchMovieDetails.rejected, (state) => {
				state.status = "failed";
				state.error = "Failed to fetch movie details";
			});
	},
});

export const { clearMovieDetails } = movieDetailsSlice.actions;
export default movieDetailsSlice.reducer;
