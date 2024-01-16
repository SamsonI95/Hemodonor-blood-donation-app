import React, { useState } from "react";
import { PopupData } from "../Data Folder/PopupData";
import { Link } from "react-router-dom";
import "./Popup.css";

function Popup() {
  const [popup, setPopup] = useState(false);

  return (
    <>
      <ul className={popup ? "pop-up clicked" : "pop-up"} onClick={() => setPopup(!popup)}>
        {PopupData.map((item, index) => (
          <li key={index} className="drop-link">
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setPopup(false)}
            >
              {item.item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Popup;
