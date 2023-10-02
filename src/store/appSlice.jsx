import { createSlice } from "@reduxjs/toolkit";
import { fetchWordSuggestions, fetchMeaning } from "/src/utils/api";
import welcome from "/src/utils/welcome";
import { useState, useEffect } from "react";

const appSlice = createSlice({
  name: "app",
  initialState: {
    search: "",
    suggestions: [],
    data: welcome,
    isloading: false,
    isError: false,
    isPlaying: false,
    showTooltip: false,
    suggestionOpen: false,
  },
  reducers: {
    setInput(state, action) {
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
    setShowTooltip(state,action){
      state.showTooltip = action.payload
    },
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    setSuggestionOpen: (state, action) => {
      state.suggestionOpen = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeaning.pending, (state, action) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchMeaning.fulfilled, (state, action) => {
        state.data = action.payload;
        state.isLoading = false;
        console.log(action.payload);
      })
      .addCase(fetchMeaning.rejected, (state, action) => {
        state.data = [];
        state.isLoading = false;
        state.isError = true;
        console.log(action.error.message);
      });
  },
});

export default appSlice.reducer;
export const {
  setInput,
  setIsLoading,
  setSuggestions,
  setData,
  setMessage,
  setIsPlaying,
  setSuggestionOpen,
  setShowTooltip,
} = appSlice.actions;
