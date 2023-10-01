import { useSelector } from "react-redux";

export default function useData() {
  const response = useSelector((state) => state.app.data);


  const data = response ? response[0] :[];
  const word = data?.word;
  const meaningsArr = data?.meanings;
  const { text: sound = "" } = data?.phonetics[0] || {};
  const audio = data?.phonetics.find((x) => x.audio !== "").audio;
  const url = data?.sourceUrls[0];

  // const audio = "";
  // const sound = ""

  return { data, word, sound, meaningsArr, audio, url };
}
