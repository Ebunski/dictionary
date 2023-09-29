import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    darkMode: false,
    font: "sans-serif",
  },
  reducers: {
    setTheme() {},
    setFont() {},
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export default userSlice.reducer;
export const { toggleTheme, setFont, setTheme } = userSlice.actions;
