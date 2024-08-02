import { useState } from "react";
import styles from "./DropBox.module.css";

const DropBox = ({ options, content }) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [isSelected, setIsSelected] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption((prevselected) => {
      if (prevselected.includes(option))
        return prevselected.filter((item) => item != option);
      else return [...prevselected, option];
    });
  };

  const handleSelected = () => {
    setIsSelected(!isSelected);
  };
  return (
    <div className={styles.DropBox}>
      <button onClick={handleSelected}>
        {content} {isSelected ? "▲" : "▼"}
      </button>
      {isSelected && (
        <div className={styles.dropdown}>
          {options.map((option) => (
            <div
              key={option}
              className={`${styles.Option} ${
                selectedOption.includes(option) ? styles.OptionSelected : ""
              }`}
              onClick={() => handleOptionClick(option)}
            >
              {selectedOption.includes(option) && (
                <img src="/src/assets/check.png" alt="checkmark" />
              )}
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropBox;
