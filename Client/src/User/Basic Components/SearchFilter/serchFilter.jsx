import React, { useState } from "react";
import { Link } from "react-router-dom";

function Serchfilter() {
  const [Leink, setLeink] = useState("");

  return (
    <div>
      <label>Choose your browser from the list:</label>
      <input
        list="browsers"
        onChange={(event) => {
          setLeink(event.target.value);
        }}
      />
      <Link to={Leink}></Link>
      <datalist id="browsers">
        <option value="Edge" />
        <option value="Firefox" />
        <option value="Chrome" />
        <option value="Opera" />
        <option value="Safari" />
      </datalist>
    </div>
  );
}

export default Serchfilter;
