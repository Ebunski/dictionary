import React from "react";

function Nav() {
  return (
    <nav className="flex items-center justify-between py-8 md:py-[3rem]">
      <img src="./assets/dictionary-logo.svg" alt="Book" />
      <div className="options flex gap-4 items-center">
        <div className="font-select flex items-center gap-4 px-6 border-e-[1px] border-e-[#e9e9e9]">
          <div>Serif</div>
          <div className="w-8">
            <img src="./assets/expand_more.png" alt="Expand More" />
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <label htmlFor="love" style={{ width: "10rem", background: "green" }}>
            <input type="checkbox" id="love"/>
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
