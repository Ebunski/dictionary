


import Suggestions from '/src/Test/SuggestionList';


const App = () => {
  

  

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
