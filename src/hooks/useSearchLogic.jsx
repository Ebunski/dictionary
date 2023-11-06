import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setInput } from "/src/store/appSlice";
import { fetchWordSuggestions, fetchMeaning } from "/src/utils/api";
import { setSuggestionOpen} from "../store/appSlice";
import useData from "../hooks/useData";

export default function useSearchLogic() {
  const { user, logged } = useSelector((st) => st.user);
  const { history } = useSelector((st) => st.app);
  const { word } = useData();

  // state and dispatch
  const searchTerm = useSelector((state) => state.app.search);
  const suggestions = useSelector((state) => state.app.suggestions);
  const dispatch = useDispatch();

  //function to update search bar and get suggestions
  const handleInputChange = async (event) => {
    const userInput = event.target.value;

    dispatch(setInput(userInput));

    if (userInput.trim() !== "") {
      dispatch(fetchWordSuggestions(userInput));
      dispatch(setSuggestionOpen(true));
    }
    if (userInput.length == 0) dispatch(setSuggestionOpen(false));
  };
 
  function clear() {
    dispatch(setInput(""));
    dispatch(setSuggestionOpen(false));
  }
  //function to set input to selected suggestion and search
  const handleSuggestionClick = (suggestion) => {
    dispatch(setInput(suggestion));
    dispatch(fetchMeaning(suggestion));
    dispatch(setSuggestionOpen(false));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    dispatch(setSuggestionOpen(false));
    // passHistory(searchTerm);
    dispatch(fetchMeaning(searchTerm));
  };
  return {
    handleInputChange,
    handleSuggestionClick,
    handleFormSubmit,
    suggestions,
    searchTerm,
    clear,
  };
}
