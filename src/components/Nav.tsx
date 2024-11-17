import { Link } from "react-router-dom";
import Container from "./container/container";

const Nav = () => {
  return (
    <div className="h-14 border-b shadow flex items-center">
      <Container>
        <div className=" flex justify-between flex-row-reverse items-center">
          <ul className="flex flex-row-reverse">
            <li className="ml-4">
              <Link to="/">خانه</Link>
            </li>
            <li className="ml-4">
              <Link to="/store">فروشگاه</Link>
            </li>
          </ul>
          <div>سبد خرید</div>
        </div>
      </Container>
    </div>
  );
};

export default Nav;
