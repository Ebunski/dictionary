import { useSelector, useDispatch } from "react-redux";
import { setSearch } from "/src/store/appSlice";
import { fetchWordSuggestions, fetchMeaning } from "/src/utils/api";

export default function useSearchLogic() {
  // state and dispatch
  const searchTerm = useSelector((state) => state.app.search);
  const suggestions = useSelector((state) => state.app.suggestions);
  const dispatch = useDispatch();

  //function to update search bar and get suggestions
  const handleInputChange = async (event) => {
    const userInput = event.target.value;

    dispatch(setSearch(userInput));

    if (userInput.trim() !== "") {
      dispatch(fetchWordSuggestions(userInput));
    }
  };

  function clear() {
    dispatch(setSearch(""));
  }
  //function to set input to selected suggestion and search
  const handleSuggestionClick = (suggestion) => {
    dispatch(setSearch(suggestion));
    dispatch(setSuggestions([]));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
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
