import { useDispatch, useSelector } from "react-redux";
import { setFont } from "/src/store/userSlice";
import { useState, useRef } from "react";
import gsap from "gsap";

const fontsList = [
  {
    name: "serif",
    style: "font-serif",
  },
  {
    name: "sans-serif",
    style: "font-sans",
  },
  {
    name: "mono",
    style: "font-mono",
  },
];
export default function useFontLogic() {
  const [isOpen, setIsOpen] = useState(false);
  const font = useSelector((state) => state.user.font);
  const dispatch = useDispatch();
  const expandRef = useRef();

  function changeFont(i) {
    const item = fontsList[i];
    dispatch(setFont(item));
  }

  const toggleImageRotation = () => {
    const icon = expandRef.current;

    gsap.to(icon, {
      rotation: "+=180",
      duration: 0.5,
    });
  };

  function handleDropdown() {
    toggleImageRotation();
    setIsOpen((prev) => !prev);
  }

  return {
    font,
    expandRef,
    fontsList,
    handleDropdown,
    toggleImageRotation,
    changeFont,
  };
}
