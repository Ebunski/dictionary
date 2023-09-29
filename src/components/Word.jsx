import { useRef, useState } from "react";
import useData from "/src/hooks/useData";
import { TweenMax, Power3 } from "gsap";
import { Pause, Play } from "react-feather";

function Word() {
  const { data, word, sound, meaningsArr, audio, url } = useData();
  const [playState, setPlayState] = useState(false);
  const playButton = useRef();
  const purple = "hsl(275, 80%, 56%)";
  const purpleBg = "rgba(164,69,237,.25)";
  return (
    <main className="flex justify-between items-center">
      <div>
        <h1 className="font-lora font-bold text-[3.5rem] ">{word}</h1>
        <div className="pronunciation text-[#9e35e9] text-[1.2rem]">
          {sound}
        </div>
      </div>
      <div className="">
        <div
          onMouseEnter={(el) => {
            el = el.target;
            TweenMax.to(el, 0.3, { background: purple });
            TweenMax.to(playButton.current, 0.3, {
              background: "transparent",
              fill: 'white'
            });
          }}
          onMouseLeave={(el) => {
            el = el.target;
            TweenMax.to(el, 0.3, { background: purpleBg });
            TweenMax.to(playButton.current, 0.3, {
              background: "transparent",
              fill: purple
            });
          }}
          onClick={() => setPlayState(!playState)}
          className="relative rounded-[100%] h-[3rem] md:h-[4rem] w-[3rem] md:w-[4rem]  bg-purpleBg grid place-items-center"
        >{
          !playState ? <Play color="transparent" fill={purple} size={32} ref={playButton}/> : <Pause color="transparent" fill={purple} size={32} ref={playButton} />
        }
        </div>
      </div>
    </main>
  );
}

export default Word;
