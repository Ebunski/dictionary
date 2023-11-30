import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ArrowDown, Moon } from "react-feather";
import { toggleTheme, setLogged } from "../store/userSlice";
import History from "./History";
import { TweenMax } from "gsap/gsap-core";
import { FaAngleDown } from "react-icons/fa";
import Fonts from "./Fonts";
function Nav() {
  const dispatch = useDispatch();
  const purple = "hsl(275, 80%, 56%)";
  const purpleBg = "rgba(164,69,237,.25)";
  const { darkMode, logged } = useSelector((state) => state.user);
  const [backtext, setBackText] = useState(null);

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
  useEffect(() => {
    axios
      .get("/api")
      .then((res) => setBackText(res.data))
      .catch((err) => console.log(err));
  });
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    dispatch(setLogged(false));
  };
  return (
    <nav className="flex items-center justify-between py-8 md:py-[3rem]">
      <img src="./assets/dictionary-logo.svg" alt="Book" />
      <div className="options flex gap-4 items-center">
        {logged ? (
          <button
            className={`bg-none border-solid border-[1px] px-4 py-2 rounded-[.5rem] ${darkMode ? 'border-white' : 'border-[black]'}`}
            onClick={logout}
          >
            Logout
          </button>
        ) : (
          <Link
            to="/login"
            className={`bg-none border-solid border-[1px] text-white px-4 py-2 rounded-[.5rem] ${darkMode ? 'border-white' : 'border-[black]'}`}
          >
            Login
          </Link>
        )}
        {logged && (
          <History />
        )}
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
