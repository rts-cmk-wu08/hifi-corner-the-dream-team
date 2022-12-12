import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import SearchBar from "./SearchBar";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <header className="header">
      <nav className="header__navbar">
        <Link className="text__decoration" to={"/"}>
          <img
            className="hif1cornerlogo"
            src="hifi-corner-logo-01.svg"
            alt="hifi corner logo"
          />
        </Link>
        <li
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          className="navbar__onLine"
        >
          shop
        </li>
        <Link to={"/aboutus"} className="text__decoration">
          <li className="navbar__onLine">about us</li>
        </Link>
        <Link to={"/contactpage"} className="text__decoration">
          <li className="navbar__onLine">contact us</li>
        </Link>
        <li
          className="shopElmNav"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        ></li>
        <div
          className="div__shopList"
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          {isHovering && <p className="browseShopList">Browse Categories</p>}
          <Link to={"/CDPlayers"} className="text__decoration">
            {" "}
            {isHovering && <p className="shopList">CD Players</p>}{" "}
          </Link>
          <Link to={"/CDPlayers"} className="text__decoration">
            {" "}
            {isHovering && <p className="shopList">DVD Players</p>}{" "}
          </Link>
          <Link to={"/Preamps"} className="text__decoration">
            {" "}
            {isHovering && <p className="shopList">Preamps</p>}{" "}
          </Link>
          <Link to={"/Speakers"} className="text__decoration">
            {" "}
            {isHovering && <p className="shopList">Speakers</p>}{" "}
          </Link>
          <Link to={"/Turntabels"} className="text__decoration">
            {" "}
            {isHovering && <p className="shopList">Turntabels</p>}{" "}
          </Link>
          <Link to={"/IntegratedAmplifiers"} className="text__decoration">
            {" "}
            {isHovering && (
              <p className="shopList">Integrated Amplifiers</p>
            )}{" "}
          </Link>
          <Link to={"/PowerAmplifiers"} className="text__decoration">
            {" "}
            {isHovering && <p className="shopList">Power Amplifiers</p>}{" "}
          </Link>
          <Link to={"/TubeAmplifiers"} className="text__decoration">
            {" "}
            {isHovering && <p className="shopList">Tube Amplifiers</p>}{" "}
          </Link>
        </div>
      </nav>
      <div className="header__right">
        <SearchBar />
        <div className="header__icons">
          <FaShoppingCart className="header__icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
