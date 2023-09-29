import { useRef } from "react";
import usePlay from "/src/hooks/usePlay";
import { TweenMax, Power3 } from "gsap";
import { Pause, Play } from "react-feather";

export default function PlayButton() {
  const playButton = useRef();
  const audio = useRef();
  const { isPlaying, handlePlay, src, handleAudioEnded } = usePlay(audio);
  const purple = "hsl(275, 80%, 56%)";
  const purpleBg = "rgba(164,69,237,.25)";

  function gsapFunc(el, fill, background) {
    el = el.target;
    TweenMax.to(el, 0.3, { background: background });
    TweenMax.to(playButton.current, 0.3, {
      background: "transparent",
      fill: fill,
    });
  }

  return (
    <div
      onMouseEnter={(el) => gsapFunc(el, "white", purple)}
      onMouseLeave={(el) => gsapFunc(el, purple, purpleBg)}
      onClick={handlePlay}
      className="relative rounded-[100%] h-[3rem] md:h-[4rem] w-[3rem] md:w-[4rem]  bg-purpleBg grid place-items-center"
    >
      <audio ref={audio} src={src} onEnded={handleAudioEnded}>
        {" "}
      </audio>
      {!isPlaying ? (
        <Play color="transparent" fill={purple} size={32} ref={playButton} />
      ) : (
        <Pause color="transparent" fill={purple} size={32} ref={playButton} />
      )}
    </div>
  );
}
