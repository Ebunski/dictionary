import { useDispatch, useSelector } from "react-redux";
import { setFont } from "/src/store/userSlice";

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

export default function Fonts() {
  const font = useSelector((state) => state.user.font);
  const dispatch = useDispatch();
  function changeFont(i) {
    const item = fontsList[i];
    dispatch(setFont(item));
  }
  return (
    <div className="relative font-select flex items-center gap-4 px-6 border-e-[1px] border-e-[#e9e9e9] flex w-10">
      <span> {font.name} </span>
      <ul className="absolute top-[100%] background- gray flex flex-col items-center">
        {fontsList.map((x, index) => (
          <li
            key={index}
            onClick={() => changeFont(index)}
            className={`font-normal
            ${x.style} ${x.name === font.name && "text-[#743EB8]"}`}
          >
            {x.name}
          </li>
        ))}
      </ul>
      <div className="w-8">
        <img src="./assets/expand_more.png" alt="Expand More" />
      </div>
    </div>
  );
}
