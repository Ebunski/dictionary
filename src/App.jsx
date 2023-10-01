import { useEffect } from "react";
import { useSelector } from "react-redux";
import Meanings from "./components/Meanings";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Sug from "./components/Suggestions";
import Word from "./components/Word";
import {BeatLoader} from 'react-spinners'
const App = () => {
  const { darkMode, font } = useSelector((st) => st.user);
  const { isLoading } = useSelector((st) => st.app);
  const background = darkMode ? "bg-[#050505]" : "bg-[#ffffff]";
  const textMain = darkMode ? "text-[#ffffff]" : "text-[#2d2d2d]";
  useEffect(
    () => (isLoading ? console.log("Pending") : console.log("Not Pending")),
    [isLoading]
  );
  return (
    <div
      className={`App flex justify-center ${font.style} ${background} ${textMain}`}
    >
      <div className="w-[95%] md:w-[60%]">
        <Nav />
        <SearchBar />
        {isLoading ? (
          <div className="flex justify-center items-center h-[80vh] w-full">
            <BeatLoader color="hsl(275, 80%, 56%)" size={32} />
          </div>
        ) : (
          <>
            <Word />
            <Meanings />
            <div className="hl flex-1 border-t-[1px] border-t-[#f4f4f4] mb-8"></div>
            <div className="source mb-16">
              <div className="text-[#84849a]">Source:</div>
              <a href="#" className="underline">
                /... What is the source? .../
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
