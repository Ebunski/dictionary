import React, { useState } from "react";
import axios from "axios";

const apiUrl = "https://api.datamuse.com/sug";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchWordSuggestions = async (term) => {
    try {
      const response = await axios.get(`${apiUrl}?s=${term}`);
      const suggestions = response.data.map((item) => item.word);
      setSuggestions(suggestions);
    } catch (error) {
      console.error("Error fetching word suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleInputChange = (event) => {
    const userInput = event.target.value;
    setSearchTerm(userInput);

    // Fetch word suggestions when the user types
    if (userInput.trim() !== "") {
      fetchWordSuggestions(userInput);
    } else {
      setSuggestions([]);
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
      <ul>
        {suggestions.map((suggestion, index) => (
          <li key={index}>{suggestion}</li>
        ))}
      </ul>
      {/* Rest of your app */}
    </div>
  );
};

export default App;
