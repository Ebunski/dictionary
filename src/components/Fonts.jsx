import useFontLogic from "/src/hooks/useFontLogic";

export default function Fonts() {
  const {
    font,
    fontsList,
    handleDropdown,
    toggleImageRotation,
    changeFont,
    listItemsRefs,
    fontMenuRef,
    expandRef,
  } = useFontLogic();

  return (
    <div
      className="relative flex justify-center items-center gap-4 
    min-w-[10rem]"
    >
      <span> {font.name} </span>
      <ul
        ref={fontMenuRef}
        className="w-full absolute top-[100%] flex z-10 flex-col items-center py-3 px-5"
      >
        {fontsList.map((x, index) => (
          <li
            ref={(el) => (listItemsRefs.current[index] = el)}
            key={index}
            onClick={() => changeFont(index)}
            className={`font-normal
            ${x.style} ${x.name === font.name && "text-[#743EB8]"}`}
          >
            {x.name}
          </li>
        ))}
      </ul>
      <div onClick={handleDropdown} ref={expandRef} className="w-8">
        <img src="./assets/expand_more.png" alt="Expand More" />
      </div>
    </div>
  );
}
