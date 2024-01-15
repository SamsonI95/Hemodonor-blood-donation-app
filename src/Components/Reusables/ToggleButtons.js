import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButtons = ({ texts, onToggle }) => {
  const [switchToggleButton, setSwitchToggleButton] = useState(true);

  const handleClick = () => {
    console.log("Toggle button clicked");
    setSwitchToggleButton(!switchToggleButton);
    onToggle && onToggle(texts[switchToggleButton ? 1 : 0]);
  };

  const leftText = switchToggleButton ? texts[1] : texts[0];
  const rightText = switchToggleButton ? texts[0] : texts[1];

  return (
    <>
      <div
        className={`toggle-button ${
          switchToggleButton ? "left-focused" : "right-focused"
        }`}
        onClick={handleClick}
      >
        {switchToggleButton ? (
          <div className="toggle-left"></div>
        ) : (
          <div className="toggle-right"></div>
        )}
      </div>
      <div className="title">
        <h3 className="left-text">{texts[0]}</h3>
        <h3 className="right-text">{texts[1]}</h3>
        <div
          className={`toggle-indicator ${
            switchToggleButton ? "left" : "right"
          }`}
        ></div>
      </div>
    </>
  );
};

export default ToggleButtons;
