import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Moon } from "react-feather";
import { toggleTheme } from "../store/userSlice";
import { TweenMax } from "gsap/gsap-core";
import Fonts from "./Fonts";
function Nav() {
  const dispatch = useDispatch();
  const purple = "hsl(275, 80%, 56%)";
  const purpleBg = "rgba(164,69,237,.25)";
  const { darkMode } = useSelector((state) => state.user);

  const togglePill = useRef();
  const toggleIcon = useRef();
  function handleThemeChange(e) {
    let el = e.target;
    dispatch(toggleTheme());
  }

  useEffect(() => {
    if (!darkMode) {
      TweenMax.to(toggleIcon.current, 0.3, { background: "gray" });
      TweenMax.to(togglePill.current, 0.3, { left: "5%" });
    } else {
      TweenMax.to(toggleIcon.current, 0.3, { background: purple });
      TweenMax.to(togglePill.current, 0.3, { left: "60%" });
    }
  }, [darkMode]);

  return (
    <nav className="flex items-center justify-between py-8 md:py-[3rem]">
      <img src="./assets/dictionary-logo.svg" alt="Book" />
      <div className="options flex gap-4 items-center">
        <Fonts />

        <div className="flex gap-4 items-center">
          <div
            ref={toggleIcon}
            onClick={handleThemeChange}
            htmlFor="love"
            className="relative w-[3rem] h-[1.5rem] bg-[gray] rounded-[2rem]"
          >
            <span
              ref={togglePill}
              className="absolute top-[50%] translate-y-[-50%] left-0 inline-block w-[1rem] h-[1rem] rounded-full bg-[white]"
            ></span>
          </div>
          <div>
            <Moon color={darkMode ? purple : "gray"} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
