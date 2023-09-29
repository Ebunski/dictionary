import useData from "/src/hooks/useData";
import PlayButton from "./PlayButton";

function Word() {
  const { data, word, sound, meaningsArr, url } = useData();

  return (
    <main className="flex justify-between items-center">
      <div>
        <h1 className="font-lora font-bold text-[3.5rem] ">{word}</h1>
        <div className="pronunciation text-[#9e35e9] text-[1.2rem]">
          {sound}
        </div>
      </div>
      <PlayButton />
    </main>
  );
}

export default Word;
