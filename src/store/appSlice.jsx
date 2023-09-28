import {createSlice} from "@reduxjs/toolkit";



const appSlice = createSlice({
  name: 'app',
  initialState: {
    search : '',
    suggestions: [],
    selectedWord: null,
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
    setSelectedWord(state, action) {
      state.selectedWord = action.payload;
    },
    handlesubmit(){},
    getData(){},
    setMessage(){},
    setIsPlaying(){},
    
  
  }
})

export default appSlice.reducer;
export const {setSearch,setSelectedWord,setSubmit, handleSubmit,getData,setMessage,setIsPlaying}= appSlice.actions