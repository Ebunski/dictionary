import { useDispatch } from "react-redux";
import { setFont } from "/src/store/userSlice";

const fontsList = ["serif", "sans-serif", "monospace"];

export default function Fonts() {
  function changeFont(i) {
    dispatch(setFont(fontList[i]));
  }
  return (
    <select onChange={(e) => changeFont(e.target.value)}>
      {fontsList.map((x, index) => (
        <option key={index} value={index}>
          {x}
        </option>
      ))}
    </select>
  );
}
