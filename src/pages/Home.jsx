import Data from "../assets/Data";
import DropBox from "../component/DropBox";
import styles from "./Home.module.css";
import searchIcon from "./static/search_icon.svg";
import suffleIcon from "./static/shuffle_icom.svg";

const Home = () => {
  return (
    <>
      <div className={styles.Home}>
        <div className={styles.Home_Container}>
          <div className={styles.Logo}>
            <p>오늘</p>
            <p>뭐 먹을까?</p>
          </div>
          <div className={styles.menu_inp}>
            <input placeholder="음식을 입력해주세요" type="text" />
            <button>
              <img src={searchIcon} alt="shuffle_icon" />
            </button>
            <button>
              <img src={suffleIcon} alt="search_icon" />
            </button>
          </div>
        </div>
        <div className={styles.DropBox}>
          <div className={styles.DropBox_container}>
            <DropBox
              options={["한식", "중식", "양식", "일식"]}
              content={"음식 장르"}
            />
            <DropBox
              options={["한식", "중식", "양식", "일식"]}
              content={"육식 종류"}
            />
            <DropBox
              options={["한식", "중식", "양식", "일식"]}
              content={"요리 종류"}
            />
            <DropBox
              options={["한식", "중식", "양식", "일식"]}
              content={"맵기"}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
