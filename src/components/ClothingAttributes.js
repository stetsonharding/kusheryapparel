import React from "react";

import "../css/ClothingAttributes.css";

export default function ClothingAttributes(props) {
  return (
    <div className="attributes-container">
      <div className="attributes-heading">
        <h1>{props.heading}</h1>
      </div>
      <div className="attributes-img">
        <img src={props.img} alt={"text"} width="130" height="110" />
      </div>
    </div>
  );
}
