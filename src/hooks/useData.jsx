import { useSelector } from "react-redux";

export default function useData() {
  const response = useSelector((state) => state.app.data);
const data  = response[response.length - 1]
  const word = data?.word;
  const meaningsArr = data?.meanings;
  const { audio, text: sound } = data?.phonetics[0];
  const url = data?.sourceUrls[0];
  // const audio = "";
  // const sound = ""

  return { data, word, sound, meaningsArr, audio, url };
}
