import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { passHistory } from "../utils/api";
export default function useData() {
  const {user, logged} = useSelector(st => st.user)
  const dispatch = useDispatch();
  const response = useSelector((state) => state.app.data);
  useEffect(() => {
    if (response.length && user && logged) {
      console.log(user)
      dispatch(passHistory(response[0].word, user));
    }
  }, [response]);

  const data = response ? response[0] : [];
  const word = data?.word;
  const meaningsArr = data?.meanings;
  const { text: sound = "" } = data?.phonetics[0] || {};
  const audio = data?.phonetics?.find((x) => x.audio !== "")?.audio || "";
  const url = data?.sourceUrls[0];

  // const audio = "";
  // const sound = ""

  return { data, word, sound, meaningsArr, audio, url };
}
