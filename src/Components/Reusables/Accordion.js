//App
import React, { useState } from "react";

//Style
import "./Accordion.css"; // You can create a CSS file for styling

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, width, height, data, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOptionClick = (item) => {
    onSelect(item);
    setIsExpanded(false);
  };

  return (
    <div className="accordion">
      <button
        className={`accordion-toggle ${isExpanded ? "expanded" : ""}`}
        onClick={handleToggle}
        style={{ width, height }}
      >
        {title}
        <span className="arrow">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>
      {isExpanded && (
        <div className="accordion-content">
          {data.map((item, index) => (
            <p key={index} onClick={() => handleOptionClick(item)}>{item.name}</p>
          ))}
        </div>
      )}
    </div>
  );
};

export default Accordion;
