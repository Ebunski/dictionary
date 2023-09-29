import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    darkMode: false,
    font: {
      name: "sans-serif",
      style: "font-sans",
    },
  },
  reducers: {
    setFont(state, { payload }) {
      state.font = { name: payload.name, style: payload.style };
    },
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export default userSlice.reducer;
export const { toggleTheme, setFont } = userSlice.actions;
