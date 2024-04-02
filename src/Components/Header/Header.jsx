import "./Header.scss";
import Logo from "../../assets/Logo/InStock-Logo_1x.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header__logo-and-nav-bar">
        <Link to={"/"}>
          <div className="header__logo">
            <img
              src={Logo}
              alt="InStock Logo"
              className="header__logo--image"
            />
          </div>
        </Link>

        <div className="header__nav-bar">
          <Link to={"/"}>
            <button className="header__button button__warehouse">
              Warehouses
            </button>
          </Link>

          <Link to={"/inventory"}>
            <button className="header__button button__inventory">
              Inventory
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
