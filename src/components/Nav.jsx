import React, { useEffect, useRef, useState } from "react";
import { TweenMax } from "gsap/gsap-core";
import Fonts from "./Fonts";
function Nav() {
  const purple = "hsl(275, 80%, 56%)";
  const purpleBg = "rgba(164,69,237,.25)";
  const [darkMode, setDarkMode] = useState(false);
  const themeCheckBox = useRef();
  const togglePill = useRef();
  const toggleIcon = useRef();
  function handleThemeChange(e) {
    let el = e.target;
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    if (!darkMode) {
      TweenMax.to(toggleIcon.current, 0.3, { background: "gray" });
      // themeCheckBox.target.checked = false;
    } else {
      TweenMax.to(toggleIcon.current, 0.3, { background: purple });
      // themeCheckBox.target.checked = true;
    }
  }, [darkMode]);
  return (
    <nav className="flex items-center justify-between py-8 md:py-[3rem]">
      <img src="./assets/dictionary-logo.svg" alt="Book" />
      <div className="options flex gap-4 items-center">
        <div className="font-select flex items-center gap-4 px-6 border-e-[1px] border-e-[#e9e9e9]">
          <Fonts />
          <div className="w-8">
            <img src="./assets/expand_more.png" alt="Expand More" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <label
            ref={toggleIcon}
            onClick={handleThemeChange}
            htmlFor="love"
            className="relative w-[3rem] h-[1.5rem] bg-[gray] rounded-[2rem] flex items-center p-1"
          >
            <input
              ref={themeCheckBox}
              className="hidden"
              type="checkbox"
              id="love"
            />
            <span
              ref={togglePill}
              className="inline-block w-[1rem] h-[1rem] rounded-full bg-[white]"
            ></span>
          </label>
          <button>
            <img src="./assets/moon.svg" alt="" />
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
