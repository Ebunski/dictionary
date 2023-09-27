import {createSlice} from "@reduxjs/toolkit";



const appSlice = createSlice({
  name: 'app',
  initialState: {
    search : '',
    data: [],
    message : "",
    isPlaying: false,
  },
  reducers: {
    getData(){},
    setMessage(){},
    setIsPlaying(){},
    
  
  }
})

export default appSlice.reducer;
export const {getData,setMessage,setIsPlaying}= appSlice.actions