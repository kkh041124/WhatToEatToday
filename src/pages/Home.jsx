import styles from "./Home.module.css";

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
              <img src="./src/assets/shuffle_icon.png" alt="suffle_icon" />
            </button>
            <button>
              <img src="./src/assets/search_icon.png" alt="search_icon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
