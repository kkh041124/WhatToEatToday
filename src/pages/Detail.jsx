import { useLocation, useNavigate, useParams } from "react-router-dom";
import Data from "../assets/Data";
import styles from "./Detail.module.css";
const Detail = () => {
  const location = useLocation();
  const queryString = location.search;
  let { keyword } = useParams();

  const checkedImg = Data.find((e) => e.name === keyword)?.img;
  const ingredients = Data.find((e) => e.name === keyword)?.ingredients;
  const cookingProcess = Data.find((e) => e.name === keyword)?.cookingProcess;
  const navigate = useNavigate();
  const navigateHome = () => {
    navigate("/");
  };
  return (
    <div className={styles.Detail}>
      <div className={styles.Logo}>
        <button onClick={navigateHome}>
          <p>오늘</p>
          <p>뭐 먹을까?</p>
        </button>
      </div>
      <div className={styles.Data_container}>
        <div className={styles.container}>
          <h2>{keyword}</h2>
          {checkedImg && <img src={checkedImg} />}

          <div className={styles.ingredients}>
            <h2>준비물</h2>
            <ul>
              {ingredients &&
                ingredients.map((ingredients, index) => (
                  <li key={index}>{ingredients}</li>
                ))}
            </ul>
          </div>
        </div>
        <div className={styles.cookingProcess}>
          <h2>조리 과정</h2>
          <ul>
            {cookingProcess &&
              cookingProcess.map((cookingProcess, index) => (
                <li key={index}>{cookingProcess}</li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Detail;
