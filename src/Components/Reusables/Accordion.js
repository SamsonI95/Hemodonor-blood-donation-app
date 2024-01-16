//App
import React, { useState } from "react";

//Style
import "./Accordion.css"; // You can create a CSS file for styling

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Accordion = ({ title, width, height, data, renderOption }) => {
    const [isExpanded, setIsExpanded] = useState(false);
  
    const handleToggle = () => {
      setIsExpanded(!isExpanded);
    };
  
    
    return (
      <div className="accordion">
        <button className={`accordion-toggle ${isExpanded ? "expanded" : ""}`} onClick={handleToggle}  style={{ width, height }}>
          {title}
          <span className="arrow"><FontAwesomeIcon icon={faChevronDown}/></span>
        </button>
        {isExpanded && (
          <div className="accordion-content">
            {data.map((item, index) => (
              <p key={index}>{renderOption(item)}</p>
            ))}
          </div>
        )}
      </div>
    );
  };

export default Accordion;
