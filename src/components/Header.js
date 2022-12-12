import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { IoPersonSharp } from "react-icons/io5"
import { FaShoppingCart } from "react-icons/fa";

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
      <div className="header__wrapper">
        <nav className="header__navbar">
        <Link className="text__decoration" to={"/"}><img className="hif1cornerlogo" src="hifi-corner-logo-01.svg" alt="hifi corner logo" /></Link>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="navbar__onLine">shop</li>
          <Link className="text__decoration" to={"/AboutUs"}><li className="navbar__onLine">about us</li></Link>
          <Link className="text__decoration" to={"/ContactUs"}><li className="navbar__onLine">contact us</li></Link>
         
          <li
            className="shopElmNav"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            >
          </li>

          
        <div className="div__shopList" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {isHovering && <p className="browseShopList">Browse Categories</p>}
        <Link to= {"/CDPlayers"} className="text__decoration"> {isHovering && <p className="shopList">CD Players</p>} </Link>
        <Link to= {"/CDPlayers"} className="text__decoration"> {isHovering && <p className="shopList">DVD Players</p>} </Link>
        <Link to= {"/Preamps"} className="text__decoration"> {isHovering && <p className="shopList">Preamps</p>} </Link>
        <Link to= {"/Speakers"} className="text__decoration"> {isHovering && <p className="shopList">Speakers</p>} </Link>
        <Link to= {"/Turntabels"} className="text__decoration"> {isHovering && <p className="shopList">Turntabels</p>} </Link>
        <Link to= {"/IntegratedAmplifiers"} className="text__decoration"> {isHovering && <p className="shopList">Integrated Amplifiers</p>} </Link>
        <Link to= {"/PowerAmplifiers"} className="text__decoration"> {isHovering && <p className="shopList">Power Amplifiers</p>} </Link>
        <Link to= {"/TubeAmplifiers"} className="text__decoration"> {isHovering && <p className="shopList">Tube Amplifiers</p>} </Link>
        </div>
      </nav>

      <div className="header__right">
          <SearchBar />
          <IoPersonSharp className="profile__icon"/>
          <FaShoppingCart className="cart__icon"/>
      </div>
    </div>
  </header>
  );
};

export default Header;
