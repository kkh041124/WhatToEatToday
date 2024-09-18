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
  const [searchParams] = useSearchParams();

  const cuisineTypes = (searchParams.get("cuisineType") || "")
    .split(",")
    .filter(Boolean);
  const meatTypes = (searchParams.get("meatType") || "")
    .split(",")
    .filter(Boolean);
  const dishTypes = (searchParams.get("dishType") || "")
    .split(",")
    .filter(Boolean);
  const spiceLevels = (searchParams.get("spiceLevel") || "")
    .split(",")
    .filter(Boolean);

  const totalQuery = Data.filter((row) => {
    const matchesCuisineType =
      cuisineTypes.length === 0 || cuisineTypes.includes(row.cuisineType);
    const matchesMeatType =
      meatTypes.length === 0 || meatTypes.includes(row.meatType);
    const matchesDishType =
      dishTypes.length === 0 || dishTypes.includes(row.dishType);
    const matchesSpiceLevel =
      spiceLevels.length === 0 ||
      spiceLevels.includes(row.spiceLevel.toString());

    return (
      matchesCuisineType &&
      matchesMeatType &&
      matchesDishType &&
      matchesSpiceLevel
    );
  });
  console.log(totalQuery);
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
  return (
    <div className={styles.Menu}>
      <div className={styles.Logo_container}>
        <div className={styles.Logo}>
          <button onClick={() => navigate("/")}>
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
        <div className={styles.Data_wrap}>
          {totalQuery.map((e) => (
            <div key={e.id} className={styles.Data_container}>
              <button onClick={() => detailMenu(e.name)}>
                <img src={e.img} alt={e.name} />
                <p>{e.name}</p>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;
