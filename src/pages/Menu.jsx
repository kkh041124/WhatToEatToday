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

  const findCuisineType = Data.filter((row) => {
    const types = searchParams.get("cuisineType").split(",");
    return types.some((type) => row.cuisineType === type);

    /* same as above
    for(const type of types) {
      if(row.cuisineType === type) {
        return true;
      }
    }
    return false
    */
  });
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
      {/*
        첨언해보건대, cuisineType, dishType, ...을 각각 map으로 보여주지 않고
        filter 함수로 모든 조건을 통과해서 true를 반환해서 여기에 표시되도록 하는 것이 더 좋을 듯
      */}
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
