import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  videos: [],
  isLoading: false,
  isError: false,
  error: "",
};

export const fetchVideos = createAsyncThunk("videos/fetchVideos", async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
});

const videosSlice = createSlice({
  name: "videos",
  initialState, // initialState: initialState
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchVideos.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
  },
});
