import useData from "/src/hooks/useData";
import Meaning from "./Meaning";
import {useSelector} from 'react-redux'

function Meanings() {
  const { data, word, sound, meaningsArr = [], audio, url } = useData();
  const {isLoading} = useSelector((st) => st.app)
  return (
    <section className="meaning">
      
      {
        meaningsArr.map((x, index) => (
          <Meaning {...x} key={index} />
        ))
      }
    </section>
  );
}

export default Meanings;
