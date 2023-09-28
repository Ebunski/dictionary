import { useSelector } from "react-redux";

export default function useData() {
  const data = useSelector((state) => state.app.data[0]);

  const word = data?.word;
  const meaningsArr = data?.meanings;
  // const { text: sound } = data?.phonetics[0];
  const url = data?.sourceUrls[0];
  const audio = "";
  const sound = ""

  return { data, word, sound, meaningsArr, audio, url };
}
