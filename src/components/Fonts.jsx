import useFontLogic from "/src/hooks/useFontLogic";

export default function Fonts() {
const { font, expandRef ,fontsList,handleDropdown, toggleImageRotation,  changeFont} =
    useFontLogic();
  return (
    <div className="relative flex  items-center justify-center  gap-4 border-red-[1px] border-e-[#e9e9e9] flex min-w-[10rem]">
      <span> {font.name} </span>
      <ul className="absolute top-[100%] bg-red-100 py-3 px-5">
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
      <div ref={expandRef} onClick={handleDropdown} className="w-8">
        <img src="./assets/expand_more.png" alt="Expand More" />
      </div>
    </div>
  );
}
