import { useLocation, useNavigate } from "react-router-dom";

const Menu = ({ search }) => {
  const location = useLocation();
  const queryString = location.search;
  return (
    <div>
      <h2>{queryString}</h2>
      <h2>Hello</h2>
    </div>
  );
};

export default Menu;
