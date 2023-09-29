import useSearchLogic from "/src/hooks/useSearchLogic";
import { useSelector, useDispatch } from "react-redux";

const SuggestionsList = () => {
  const { darkMode, theme } = useSelector((state) => state.user);
  const mode = darkMode ? theme.dark : theme.light;
  const { handleSuggestionClick, suggestions } = useSearchLogic();
  if (suggestions.length === 0) return;

  return (
    <ul
      className={`absolute top-[200%] -left-[5%] md:-left-[1.5%] -right-[5%] md:-right-[1.5%] ${mode.background} rounded-md shadow-lg z-10 p-4 max-h-[50vh] overflow-auto`}
    >
      {suggestions?.map((suggestion, index, arr) => (
        <>
          <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
            {suggestion.word}
          </li>
          {index != arr.length - 1 && (
            <div
              className={`hl flex-1 border-t-[1px] ${
                darkMode ? "border-t-[#1f1f1f]" : "border-t-[#f4f4f4]"
              } my-4 mx-2`}
            ></div>
          )}
        </>
      ))}
    </ul>
  );
};

export default SuggestionsList;
