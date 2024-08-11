import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getVideos } from "./videosAPI";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

//async thunk function
export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();
  // return data;

  const videos = await getVideos();
  return videos;
});

const videosSlice = createSlice({
  name: "videos",
  initialState, // initialState: initialState
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder
    .addCase(fetchVideos.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    })
    .addCase(fetchVideos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.videos = action.payload;
    })
    .addCase(fetchVideos.rejected, (state, action) => {
      state.isLoading = false;
      state.videos = [];
      state.isError = true;
      state.error = action.error.message;
    });
  },
});

export default videosSlice.reducer;
