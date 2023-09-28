import { createSlice } from "@reduxjs/toolkit";
import { fetchWordSuggestions, fetchMeaning } from "/src/utils/api";

const appSlice = createSlice({
  name: "app",
  initialState: {
    search: "",
    suggestions: [],
    data: [],
    message: "",
    isPlaying: false,
  },
  reducers: {
    setSearch(state, action) {
      state.search = action.payload;
    },
    setSuggestions(state, action) {
      state.suggestions = action.payload;
    },

    setData(state, action) {
      state.data = action.payload;
    },
    setMessage() {},
    setIsPlaying() {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeaning.fulfilled, (state, action) => {
        console.log(action.payload)
        state.data = action.payload;
      })
      .addCase(fetchMeaning.rejected, (state, action) => {
        
        state.data = [];
      });
      
  },
});

export default appSlice.reducer;
export const { setSearch, setSuggestions, setData, setMessage, setIsPlaying } =
  appSlice.actions;
