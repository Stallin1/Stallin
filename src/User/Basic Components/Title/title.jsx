import React from "react";
import "./title.css";

function title(props) {
  return (
    <span>
      <h2 className="ul-title">
        <span style={{ color: props.pickedColor }}>{props.colorValue}</span>
        {props.normalValue}
      </h2>
      <span
        className="title-line"
        style={{ backgroundColor: props.pickedColor }}
      ></span>
    </span>
  );
}

export default title;
