import useData from "/src/hooks/useData";
import Meaning from "./Meaning";

function Meanings() {
  const { data, word, sound, meaningsArr = [], audio, url } = useData();
  return (
    <section className="meaning">
      {meaningsArr.map((x, index) => (
        <Meaning {...x} key={index} />
      ))}
    </section>
  );
}

export default Meanings;
