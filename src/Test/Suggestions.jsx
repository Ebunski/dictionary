import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSuggestions } from '/src/store/appSlice';

const SuggestionList = () => {
  const suggestions = useSelector((state) => state.app.suggestions);
  const dispatch = useDispatch();

  const handleSuggestionClick = (suggestion) => {
    // Handle suggestion click...
    // For example, you can dispatch an action to clear suggestions:
    dispatch(setSuggestions([]));
  };

  return (
    <ul>
      {suggestions.map((suggestion, index) => (
        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
          {suggestion}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionList;
