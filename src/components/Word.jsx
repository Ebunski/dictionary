import useData from "/src/hooks/useData";

function Word() {
  const { data, word, sound, meaningsArr,audio,url } = useData();
  return (
    <main className="flex justify-between items-center">
      <div>
        <h1 className="font-lora font-bold text-[3.5rem] ">{word}</h1>
        <div className="pronunciation text-[#9e35e9] text-[1.2rem]">
          {sound}
        </div>
      </div>
      <div className="">
        <div className="relative rounded-[100%] h-[3rem] md:h-[4rem] w-[3rem] md:w-[4rem]  bg-[#e8d0fa]">
          <span className="box-border play-button absolute left-[50%] top-[50%] -translate-x-[45%] -translate-y-[50%]"></span>
        </div>
      </div>
    </main>
  );
}

export default Word;
