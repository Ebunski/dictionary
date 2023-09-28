import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearch } from '/src/store/appSlice';
import Suggestions from '/src/Test/SuggestionList';
import { fetchWordSuggestions } from '/src/utils/api';

const App = () => {
  const searchTerm = useSelector((state) => state.app.search);
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    dispatch(setSearch(userInput));

    if (userInput.trim() !== '') {
      fetchWordSuggestions(userInput).then((suggestions) => {
        // Handle suggestions, e.g., dispatch setSuggestions action
      });
    } else {
      // Dispatch setSuggestions action with an empty array
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search for a word..."
      />
      <SuggestionList /> {/* Render the suggestion list */}
      {/* Rest of your app */}
    </div>
  );
};

export default App;
