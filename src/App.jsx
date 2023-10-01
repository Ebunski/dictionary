import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useConstants from "/src/hooks/useConstants";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Body from "./components/Body";
import { setIsMobile } from "./store/userSlice";

const App = () => {
  const dispatch = useDispatch();
  const {background, textMain } = useConstants()
  const { font } = useSelector((st) => st.user);

  const handleWindowResize = () => {
    if (window.innerWidth <= 500) dispatch(setIsMobile(true));
    else dispatch(setIsMobile(false));
  };
  useEffect(() => {
    window.addEventListener("resize", () => handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div
      className={`App flex justify-center ${font.style} ${background} ${textMain}`}
    >
      <div className="w-[95%] md:w-[60%]">
        <Nav />
        <SearchBar />
        <Body />
      </div>
    </div>
  );
};

export default App;
