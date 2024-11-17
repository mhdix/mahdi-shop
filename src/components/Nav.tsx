import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="h-14 border-b shadow flex justify-between flex-row-reverse items-center container mx-auto">
      <ul className="flex">
        <li>
          <Link to="/">خانه</Link>
        </li>
        <li>
          <Link to="/store">فروشگاه</Link>
        </li>
      </ul>
      <div>سبد خرید</div>
    </div>
  );
};

export default Nav;
