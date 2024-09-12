import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import Data from "../assets/Data";
import searchIcon from "./static/search_icon.svg";
import suffleIcon from "./static/shuffle_icom.svg";
import styles from "./Menu.module.css";
import { useEffect, useState } from "react";
const Menu = () => {
  const location = useLocation();
  const queryString = location.search;
  const navigate = useNavigate();
  const [menuName, setMenuName] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  const cuisineTypes = searchParams.getAll("cuisineType");
  const findCuisineType = Data.filter((e) =>
    cuisineTypes.includes(e.cuisineType)
  );
  const handleMenu = (e) => {
    setMenuName(e.target.value);
  };
  const navigateMenu = () => {
    navigate(`/detail/${menuName}`);
  };
  useEffect(() => {
    findCuisineType.map((e) => (
      <div>
        <img src={e.img} alt={e.name} />
      </div>
    ));
  }, [searchParams]);

  return (
    <div className={styles.Menu}>
      <div className={styles.Logo_container}>
        <div className={styles.Logo}>
          <p>오늘</p>
          <p>뭐 먹을까?</p>
        </div>
        <div className={styles.menu_inp}>
          <input
            placeholder="음식을 입력해주세요"
            type="text"
            onChange={handleMenu}
          />
          <button onClick={navigateMenu}>
            <img src={searchIcon} alt="search_icon" />
          </button>
          <button>
            <img src={suffleIcon} alt="shuffle_icon" />
          </button>
        </div>
      </div>
      <div className={styles.Data}>
        {findCuisineType.map((e) => (
          <div key={styles.Data} className={styles.Data_container}>
            <img src={e.img} alt={e.name} />
            <p>{e.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
