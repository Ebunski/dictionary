import {createSlice} from "@reduxjs/toolkit";



const appSlice = createSlice({
  name: 'app',
  initialState: {
    search : '',
    suggestions: [],
    data: [],
    message : "",
    isPlaying: false,
  },
  reducers: {
    setSearch(state, action){
      state.search = action.payload;
    },
    setSuggestions(){
      state.suggestions = getSuggestions(action.payload)
    },
    
    setData(state, action) {
      state.data = action.payload;
    },
    handlesubmit(){},
    setMessage(){},
    setIsPlaying(){},
    
  
  }
})

export default appSlice.reducer;
export const {setSearch,setSuggestions, handleSubmit,setData,setMessage,setIsPlaying}= appSlice.actions