import {useSelector} from 'react-redux';
import Meanings from "./components/Meanings";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Word from "./components/Word";
const App = () => {
  const {darkMode} = useSelector(st => st.user)
  return (
    <div className={`App flex justify-center font-lora ${darkMode && 'bg-black text-white'}`}>
      <div className="w-[95%] md:w-[60%]">
        <Nav />
        <SearchBar />
        <Word />
        <Meanings />
      </div>
    </div>
  );
};

export default App;
