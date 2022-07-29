import React from "react";

import "./styles.css";

const Lamp = ({ isOn, onLampClick }) => {
  return (
    <div className="lamp js-turnoff-btn">
      <div className="lamp-item lamp-top"></div>
      <div className="lamp-item lamp-middle"></div>
      <div className="lamp-item lamp-bottom" onClick={onLampClick}></div>
      <div className={`lamp-item lamp-light ${isOn && "open"}`}></div>
    </div>
  );
};

export default Lamp;
