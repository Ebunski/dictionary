import { createSlice } from "@reduxjs/toolkit";
import { fetchWordSuggestions, fetchMeaning } from "/src/utils/api";
import welcome from "/src/utils/welcome";
import { useState, useEffect } from "react";

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
    isMobile: window.innerWidth <= 500,
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
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsPlaying(state, action) {
      state.isPlaying = action.payload;
    },
    setMessage() {},
    setIsMobile() {
      state.isMobile = action.payload;
    }
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMeaning.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(fetchMeaning.fulfilled, (state, action) => {
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
  setSearch,
  setIsLoading,
  setSuggestions,
  setData,
  setMessage,
  setIsPlaying,
  setIsMobile,
} = appSlice.actions;
