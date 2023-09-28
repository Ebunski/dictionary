import Meanings from "./components/Meanings";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Word from "./components/Word";
const App = () => {
  return (
    <div className="App flex justify-center font-lora">
      <div className="w-[95%] md:w-[60%]">
        <Nav />
        <SearchBar />
        <Word />
        <Meanings />
      </div>
    </div>
  );
};

export default App;
