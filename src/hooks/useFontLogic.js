import { useDispatch, useSelector } from "react-redux";
import { setFont } from "/src/store/userSlice";
import { useState, useRef, useEffect } from "react";
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
  const fontMenuRef = useRef();
  const listItemsRefs = useRef([]);

  useEffect(() => {
    const dropdown = fontMenuRef.current;
    const listItems = listItemsRefs.current;

    if (dropdown && listItems) {
      const tl = gsap.timeline({ paused: true });

      tl.to(dropdown, {
        height: isOpen ? "auto" : 0,
        opacity: isOpen ? 1 : 0,
        duration: 0.5,
        ease: "power2.inOut",
      });

      tl.staggerFromTo(
        listItems,
        0.3,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0 },
        0.1,
        "-=0.2"
      );

      if (isOpen) {
        tl.play();
      } else {
        tl.reverse();
      }
    }
  }, [isOpen]);

  function changeFont(i) {
    const item = fontsList[i];
    dispatch(setFont(item));
    setIsOpen(false);
  }

  const toggleImageRotation = () => {
    const icon = expandRef.current;

    gsap.to(icon, {
      rotation: isOpen ? 0 : 180,
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
    listItemsRefs,
    fontMenuRef,
    isOpen,
  };
}
