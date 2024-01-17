// App
import React, { useState } from "react";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Select = ({ label, options, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsExpanded(false);
    onSelect(option);
  };

  return (
    <div className="select">
      <button
        className={`select-toggle ${isExpanded ? "expanded" : ""}`}
        onClick={handleToggle}
      >
        {label}: {selectedOption || "Select an option"}
        <span className="arrow">
          <FontAwesomeIcon icon={faChevronDown} />
        </span>
      </button>
      {isExpanded && (
        <div className="select-options">
          {options && options.map((option, index) => (
            <div
              key={index}
              className="select-option"
              onClick={() => handleOptionSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
