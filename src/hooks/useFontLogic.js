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
  const dropdownRef = useRef(null);
  const listItemsRefs = useRef([]);

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


  // function ToggleDropdown() {
  //   const dropdown = dropdownRef.current;
  //   const listItems = listItemsRefs.current;
  //   if (dropdown && listItems) {
  //     const tl = gsap.timeline({ paused: true });

  //     // Animation for opening dropdown
  //     tl.to(dropdown, { top: "100%", duration: 0.5, ease: "power2.inOut" });

  //     // Staggered animation for list items
  //     tl.staggerFromTo(
  //       listItems,
  //       0.3,
  //       { opacity: 0, y: -10 },
  //       { opacity: 1, y: 0 },
  //       0.1, // Stagger duration
  //       "-=0.2" // Offset
  //     );

  //     // Animation for closing dropdown
  //     tl.to(dropdown, { top: "-100%", duration: 0.5, ease: "power2.inOut" });

  //     // You can trigger the animation when needed, for example, when clicking a button.
  //     const openDropdown = () => tl.play();
  //     const closeDropdown = () => tl.reverse();
  //   }
  // }

  function handleDropdown() {
    toggleImageRotation();
    // toggleDropdown();
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
    dropdownRef,
  };
}
