import React, { useState } from "react";

const A = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const options = ["한식", "중식", "양식", "일식"];

  const handleOptionClick = (option) => {
    setSelectedOptions((prevSelected) => {
      if (prevSelected.includes(option)) {
        return prevSelected.filter((item) => item !== option);
      } else {
        return [...prevSelected, option];
      }
    });
  };

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      <button onClick={handleDropdownClick}>
        음식 장르 {isOpen ? "▲" : "▼"}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option}
              className={`option ${
                selectedOptions.includes(option) ? "selected" : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {selectedOptions.includes(option) && (
                <img src="checkmark.png" alt="checkmark" />
              )}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default A;
