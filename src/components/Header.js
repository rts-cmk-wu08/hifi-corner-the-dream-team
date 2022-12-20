import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { IoPersonSharp } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
// import { useContext } from "react";
// import { CartContext } from "../context/cartContext";

const Header = () => {
  // const { totalCount, totalPrice } = useContext(CartContext);

  const [visible, setVisible] = useState(false);

  const handlevisibility = () => {
    setVisible(!visible);
  };
  console.log(visible);

  return (
    <header className={visible ? "visible" : ``}>
      <div className="header__wrapper">
        <nav className="header__navbar">
          <Link className="text__decoration" to={"/"}>
            <img
              className="hif1cornerlogo"
              src="hifi-corner-logo-01.svg"
              alt="hifi corner logo"
            />
          </Link>
          <li
            className="white__text list__style__type shop nav__li {}"
            onClick={handlevisibility}
          >
            Shop
          </li>
          <NavLink
            className="text__decoration white__text list__style__type nav__li"
            to={"/AboutUs"}
          >
            <li className="navbar__onLine">about us</li>
          </NavLink>
          <NavLink
            className="text__decoration white__text list__style__type nav__li"
            to={"/ContactPage"}
          >
            <li className="navbar__onLine">contact us</li>
          </NavLink>
        </nav>
        <div className="header__right">
          <SearchBar />
          <IoPersonSharp className="profile__icon white__text" />
          <FaShoppingCart className="cart__icon white__text" />
          {/* <h3 className="h3__white">{totalCount}</h3>
          <h3 className="h3__white">{totalPrice}</h3> */}
        </div>
      </div>
      <ul
        className={`cartContainerItems ${
          visible ? "cartContainerItems--visible" : ""
        }`}
      >
        <h2 className="black browse__categories">Browse Categories</h2>
        <div className="categories__wrapper">
          <li className="list__style__type gap__text">
            <Link to={"/CDPlayers"} className="text__decoration product__list">
              CD Players
            </Link>
          </li>
          <li className="list__style__type gap__text">
            <Link to={"/CDPlayers"} className="text__decoration product__list">
              DVD Players
            </Link>
          </li>
          <li className="list__style__type gap__text">
            <Link to={"/Preamps"} className="text__decoration product__list">
              Preamps
            </Link>
          </li>
          <li className="list__style__type gap__text">
            <Link to={"/Speakers"} className="text__decoration product__list">
              Speakers
            </Link>
          </li>
          <li className="list__style__type gap__text">
            <Link to={"/Turntabels"} className="text__decoration product__list">
              Turntabels
            </Link>
          </li>
          <li className="list__style__type gap__text">
            <Link
              to={"/IntegratedAmplifiers"}
              className="text__decoration product__list"
            >
              Integrated Amplifiers
            </Link>
          </li>
          <li className="list__style__type gap__text">
            <Link
              to={"/PowerAmplifiers"}
              className="text__decoration product__list"
            >
              Power Amplifiers
            </Link>
          </li>
          <li className="list__style__type gap__text">
            <Link
              to={"/TubeAmplifiers"}
              className="text__decoration product__list"
            >
              Tube Amplifiers
            </Link>
          </li>
        </div>
      </ul>
    </header>
  );
};

export default Header;
