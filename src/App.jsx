import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setIsMobile, setLogged } from "./store/userSlice";
import Home from "./pages/Home";
import Login from "./pages/login";
import Signup from "./pages/Signup";
import PrivatePage from "./pages/PrivatePage";
import axios from "axios";

const App = () => {
  const { logged } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleWindowResize = () => {
    if (window.innerWidth <= 500) dispatch(setIsMobile(true));
    else dispatch(setIsMobile(false));
  };
  useEffect(() => {
    window.addEventListener("resize", () => handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  useEffect(() => {
    const checkAuthenticated = async () => {
      try {
        const res = await axios.get("/protectedroute", {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        });
        if (!res.data.auth) {
          dispatch(setLogged(false));
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          dispatch(setLogged(true));
        }
      } catch (err) {
        console.log(err);
      }
    };
    checkAuthenticated();
  }, []);
  const CheckLoggedIn = ({ children }) => {
    if (!logged) return <Navigate to="/" replace />;
    return children;
  };
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route
        path="/privatepage"
        element={
          <CheckLoggedIn>
            <PrivatePage />
          </CheckLoggedIn>
        }
      />
    </Routes>
  );
};

export default App;
