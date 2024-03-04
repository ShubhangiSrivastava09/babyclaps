import React from "react";

import "./buttonStyle.css";

function CustomButton(props) {
  return (
    <div className="button">
      {props.children}
      <text className="text">{props.label}</text>
    </div>
  );
}

export default CustomButton;
