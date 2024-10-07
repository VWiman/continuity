import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const API_KEY = import.meta.env.VITE_OMDB_API_KEY;

// Search for movie by title
const fetchMovies = createAsyncThunk("movies/fetchMovies", async (searchValue, thunkAPI) => {
	try {
		const response = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchValue}`);

		if (!response.ok) {
			throw new Error(`Failed to fetch: ${response.statusText}`);
		}

		const result = await response.json();

		if (result.Response === "False") {
			return thunkAPI.rejectWithValue(result.Error);
		}

		return result;
	} catch (error) {
		return thunkAPI.rejectWithValue(`Failed to get response: ${error.message}`);
	}
});

const initialState = {
	movies: [],
	status: "idle", // "idle" | "loading" | "succeeded" | "failed"
	error: null,
};

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
			.addCase(fetchMovies.rejected, (state, action) => {
				state.status = "failed";
				state.error = action.payload || "Failed to fetch movies";
			});
	},
});

export const { clearMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
