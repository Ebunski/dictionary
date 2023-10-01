import useData from "/src/hooks/useData";
import PlayButton from "./PlayButton";
import { useSelector } from "react-redux";

function Word() {
  const { data, word, sound, meaningsArr, url } = useData();
  const { font } = useSelector((st) => st.user);

  return (
    <main className="flex justify-between items-center">
      <div>
        <h1 className={`${font.style} font-bold text-[3.5rem]`}>{word}</h1>
        <div className="pronunciation text-[#9e35e9] text-[1.2rem]">
          {sound}
        </div>
      </div>
      <PlayButton />
    </main>
  );
}

export default Word;
