import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    darkMode: false,
    font: "sans-serif",
  },
  reducers: {
    setFont(state, action) {
      state.font = action.payload;
    },
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export default userSlice.reducer;
export const { toggleTheme, setFont } = userSlice.actions;
