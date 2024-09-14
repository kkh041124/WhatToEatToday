import Data from "../assets/Data";
import DropBox from "../component/DropBox";
import styles from "./Home.module.css";
import searchIcon from "./static/search_icon.svg";
import suffleIcon from "./static/shuffle_icom.svg";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryString = location.search;
  const [search, setSearch] = useState("");

  const handleInput = (e) => {
    setSearch(e.target.value);
  };
  const routePageHandler = () => {
    if (queryString.length > 0) navigate(`/menu/${queryString}`);
    else navigate(`/detail/${search}`);
  };
  const suffleData = () => {
    const randomName = Math.floor(Math.random() * Data.length);
    navigate(`/detail/${Data[randomName].name}`);
  };
  return (
    <>
      <div className={styles.Home}>
        <div className={styles.Home_Container}>
          <div className={styles.Logo}>
            <p>오늘</p>
            <p>뭐 먹을까?</p>
          </div>

          <div className={styles.menu_inp}>
            <input
              placeholder="음식을 입력해주세요"
              type="text"
              onChange={handleInput}
            />
            <button onClick={routePageHandler}>
              <img src={searchIcon} alt="search_icon" />
            </button>
            <button onClick={suffleData}>
              <img src={suffleIcon} alt="shuffle_icon" />
            </button>
          </div>
        </div>
        <div className={styles.DropBox}>
          <div className={styles.DropBox_container}>
            <DropBox
              options={["한식", "중식", "양식", "일식"]}
              content={"음식 장르"}
              queryKey="cuisineType"
            />
            <DropBox
              options={["소고기", "돼지고기", "닭고기", "기타"]}
              content={"육식 종류"}
              queryKey="meatType"
            />
            <DropBox
              options={["면", "밥", "분식", "기타"]}
              content={"요리 종류"}
              queryKey="dishType"
            />
            <DropBox
              options={[0, 1, 2, 3]}
              content={"맵기"}
              queryKey="spiceLevel"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
