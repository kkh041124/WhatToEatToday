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
  const [menuName, setMenuName] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();

  const cuisineTypes = searchParams.getAll("cuisineType");
  const dishType = searchParams.getAll("dishType");
  const meatType = searchParams.getAll("meatType");
  const spiceLevel = searchParams.getAll("spiceLevel");

  const findCuisineType = Data.filter((e) =>
    cuisineTypes.includes(e.cuisineType)
  );
  const findDishType = Data.filter((e) => dishType.includes(e.dishType));
  const findMeatType = Data.filter((e) => meatType.includes(e.meatType));
  const findSpiceLevel = Data.filter((e) => spiceLevel.includes(e.spiceLevel));

  const handleMenu = (e) => {
    setMenuName(e.target.value);
  };
  const navigateMenu = () => {
    if (!menuName.trim()) {
      alert("메뉴명을 입력해주세요");
    } else {
      navigate(`/detail/${menuName}`);
    }
  };
  const detailMenu = (name) => {
    navigate(`/detail/${name}`);
  };
  if (findCuisineType || findDishType) console.log("제발");
  return (
    <div className={styles.Menu}>
      <div className={styles.Logo_container}>
        <div className={styles.Logo}>
          <button onClick={() => navigate(-1)}>
            <p>오늘</p>
            <p>뭐 먹을까?</p>
          </button>
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
          <div key={e.id} className={styles.Data_container}>
            <button onClick={() => detailMenu(e.name)}>
              <img src={e.img} alt={e.name} />
              <p>{e.name}</p>
            </button>
          </div>
        ))}
      </div>
      {findCuisineType.map((e) => e.name)}
      {findDishType.map((e) => e.name)}
      {findMeatType.map((e) => e.name)}
      {findSpiceLevel.map((e) => e.name)}
    </div>
  );
};

export default Menu;
