import useSearchLogic from "/src/hooks/useSearchLogic";

const SuggestionsList = () => {
  const { handleSuggestionClick, suggestions } = useSearchLogic();
  if (suggestions.length === 0) return;


  return (
    <ul>
      {suggestions?.map((suggestion, index) => (
        <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
          {suggestion.word}
        </li>
      ))}
    </ul>
  );
};

export default SuggestionsList;
