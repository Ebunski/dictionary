import {createSlice} from "@reduxjs/toolkit";



const userSlice = createSlice({
  name: 'user',
  initialState: {
    theme: 'light',
    font: 'sans-serif'
  },
  reducers: {
    setTheme(){},
    setFont(){}
  
  }
})

export default userSlice.reducer;
export const {theme, font} = userSlice.actions