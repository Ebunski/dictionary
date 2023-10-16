import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setIsMobile } from "./store/userSlice";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  const dispatch = useDispatch();
  const handleWindowResize = () => {
    if (window.innerWidth <= 500) dispatch(setIsMobile(true));
    else dispatch(setIsMobile(false));
  };
  useEffect(() => {
    window.addEventListener("resize", () => handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
    </Routes>
  );
};

export default App;
