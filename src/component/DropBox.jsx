import { useState } from "react";
import styles from "./DropBox.module.css";
import arrow from "./static/Arrow.svg";
import check from "../assets/check.png";
import { useNavigate } from "react-router-dom";

const DropBox = ({ options, content, queryKey }) => {
  const [selectedOption, setSelectedOption] = useState([]);
  const [isSelected, setIsSelected] = useState(false);
  const navigate = useNavigate();
  const handleSelected = () => {
    setIsSelected(!isSelected);
  };
  const handleOptionClick = (option) => {
    setSelectedOption((prevselected) => {
      if (prevselected.includes(option)) {
        const newSelected = prevselected.filter((item) => item !== option);
        updateQuery(newSelected);
        return newSelected;
      } else {
        const newSelected = [...prevselected, option];
        updateQuery(newSelected);
        return newSelected;
      }
    });
  };
  const updateQuery = (selectedOption) => {
    const params = new URLSearchParams(window.location.search);
    if (selectedOption.length > 0)
      params.set(queryKey, selectedOption.join(","));
    else params.delete(queryKey);
    navigate(`${window.location.pathname}?${params.toString()}`);
  };
  return (
    <div className={styles.DropBox}>
      <button onClick={handleSelected}>
        {content}{" "}
        {isSelected ? (
          <img src={arrow} />
        ) : (
          <img src={arrow} className={styles.btn_arrow} />
        )}
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
                <img src={check} alt="checkmark" />
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
