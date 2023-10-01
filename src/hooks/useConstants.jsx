import { useSelector } from "react-redux";
export default function useConstants() {
  const { darkMode } = useSelector((st) => st.user);

  const background = darkMode ? "bg-[#050505]" : "bg-[#ffffff]";
  const textMain = darkMode ? "text-[#ffffff]" : "text-[#2d2d2d]";

  return {
    background,
    textMain,
  };
}
