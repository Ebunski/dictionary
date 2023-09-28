import useSearchLogic from "/src/hooks/useSearchLogic";

const SuggestionsList = () => {
  const { handleSuggestionClick, suggestions } = useSearchLogic();

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

export default SuggestionsList;
