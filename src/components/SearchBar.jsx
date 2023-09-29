import useSearchLogic from "/src/hooks/useSearchLogic";
import usePlay from "/src/hooks/usePlay";

function SearchBar() {
  const { searchTerm, handleInputChange, handleFormSubmit } = useSearchLogic();
  const { handlePlay, isPlaying } = usePlay;
  return (
    <div className="search-bar rounded-md my-2 md:my-6 p-4 flex items-center gap-4 bg-[#f4f4f4]">
      <input
        type="text"
        name="search"
        id="search"
        className="flex-1 bg-[#f4f4f4] outline-none focus:outline-none"
        placeholder="Type to search"
        value={searchTerm}
        onChange={(e) => handleInputChange(e)}
      />
      <div onClick={(e) => handleFormSubmit(e)}>
       <audio>  <img src="./assets/search.svg" alt="Search icon" />
       </audio>
      </div>
    </div>
  );
}

export default SearchBar;
