import { createSlice } from "@reduxjs/toolkit";
import { fetchWordSuggestions, fetchMeaning } from "/src/utils/api";
import welcome from "/src/utils/welcome";

const appSlice = createSlice({
  name: "app",
  initialState: {
    font: "sans-serif",
    search: "",
    suggestions: [],
    data: welcome,
    message: "",
    isloading: false,
    isError: false,
    isPlaying: false,
  },
  reducers: {
    setFont(state, action) {
      state.font = action.payload;
    },
    setSearch(state, action) {
      state.search = action.payload;
    },
    setSuggestions(state, action) {
      state.suggestions = action.payload;
    },

    setData(state, action) {
      state.data = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    setMessage() {},
  },
  extraReducers: (builder) => {
    builder

      .addCase(fetchMeaning.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMeaning.fulfilled, (state, action) => {
        console.log(action.payload);
        state.data = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchMeaning.rejected, (state, action) => {
        state.data = [];
        state.isLoading = false;
      });
  },
});

export default appSlice.reducer;
export const {
  setFont,
  setSearch,
  setIsLoading,
  setSuggestions,
  setData,
  setMessage,
  setIsPlaying,
} = appSlice.actions;
