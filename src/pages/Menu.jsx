import { useLocation, useNavigate, useParams } from "react-router-dom";
import Data from "../assets/Data";

const Menu = () => {
  const location = useLocation();
  const queryString = location.search;
  let { keyword } = useParams();

  const checkedImg = Data.find((e) => e.name === keyword)?.img;

  return (
    <div>
      <h2>{queryString}</h2>
      <h2>Hello</h2>
      <h2>{keyword}</h2>
      {checkedImg && <img src={checkedImg} />}
    </div>
  );
};

export default Menu;
