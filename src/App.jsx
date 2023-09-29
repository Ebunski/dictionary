import { useSelector } from "react-redux";
import Meanings from "./components/Meanings";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Sug from "./components/Suggestions";
import Word from "./components/Word";
const App = () => {
  const { darkMode, font } = useSelector((st) => st.user);
  const background = darkMode ? "bg-[#050505]" : "bg-[#ffffff]";
  const textMain = darkMode ? "text-[#ffffff]" : "text-[#2d2d2d]";
  return (
    <div
      className={`App flex justify-center ${font.style} ${background} ${textMain}`}
    >
      <div className="w-[95%] md:w-[60%]">
        <Nav />
        <SearchBar />
        <Word />
        <Meanings />
        <div className="hl flex-1 border-t-[1px] border-t-[#f4f4f4] mb-8"></div>
        <div className="source mb-16">
          <div className="text-[#84849a]">Source:</div>
          <a href='#' className="underline">/... What is the source? .../</a>
        </div>
      </div>
    </div>
  );
};

export default App;
