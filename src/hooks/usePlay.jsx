import { useSelector, useDispatch } from "react-redux";
import { setIsPlaying } from "/src/store/appSlice";

export default function usePlay() {
  const isPlaying = useSelector((state) => state.app.isPlaying);
  const dispatch = useDispatch();

  function handlePlay() {
   dispatch(setIsPlaying(!isPlaying))
  }

  return { isPlaying, handlePlay };
}
