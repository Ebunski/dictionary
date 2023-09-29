import { useSelector, useDispatch } from "react-redux";
import { setIsPlaying } from "/src/store/appSlice";
import useData from "/src/hooks/useData";

export default function usePlay(audioRef) {
  const { audio: src } = useData();
  const isPlaying = useSelector((state) => state.app.isPlaying);
  const dispatch = useDispatch();

  function handlePlay() {
    if (audioRef) {
      const el = audioRef.current;
      el.paused ? el.play() : el.pause();
      dispatch(setIsPlaying(!isPlaying));
      console.log(src, el);
    }
  }

  function handleAudioEnded() {
    dispatch(setIsPlaying(false));
  }

  return { isPlaying, handlePlay, src , handleAudioEnded};
}
