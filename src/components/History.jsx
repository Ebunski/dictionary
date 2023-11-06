import React from "react";
import { useSelector } from "react-redux";

function History() {
  const { history } = useSelector((st) => st.app);
  return (
    <div>
      <ul>
        {history &&
          history.map((item) => {
            <li>{item}</li>;
          })}
      </ul>
    </div>
  );
}

export default History;
