import React, { useState } from "react";
import "./ToggleButton.css";

const ToggleButton = ({texts}) => {
   const [switchToggleButton, setSwitchToggleButton] = useState(false);
   const handleClick = () => setSwitchToggleButton(!switchToggleButton);
  
    return (
      <div className="toggle-button" onClick={handleClick}>
        {switchToggleButton?<div className="toggle-left"><h3>{texts[0]}</h3></div>
        :<div className="toggle-right"><h3>{texts[1]}</h3></div>}
      </div>
    );
  };

export default ToggleButton;
