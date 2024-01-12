import React, { useState } from "react";
import { DropdownData } from "../Data Folder/DropdownData";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul className={dropdown ? "drop-item clicked" : "drop-item"} onClick={() => setDropdown(!dropdown)}>
        {DropdownData.map((item, index) => (
          <li key={index} className="drop-link">
            <Link
              to={item.path}
              className={item.cName}
              onClick={() => setDropdown(false)}
            >
              {item.item}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Dropdown;
