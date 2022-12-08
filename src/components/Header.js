import { useState } from "react";
import Search from "./SearchBar";

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <header>
      <div>
        <nav>
          <img
            className="hif1cornerlogo"
            src="hifi-corner-logo-01.svg"
            alt="hifi corner logo"
          />
          <li
            className="shopElmNav"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            shop
          </li>
          <li>about us</li>
          <li>contact us</li>
          <Search />
        </nav>

        {isHovering && <p className="">Browse Categories</p>}
        {isHovering && <p className="shopList">CD Players</p>}
        {isHovering && <p className="shopList">DVD Players</p>}
        {isHovering && <p className="shopList">Preamps</p>}
        {isHovering && <p className="shopList">Speakers</p>}
        {isHovering && <p className="shopList">Turntabels</p>}
        {isHovering && <p className="shopList">Integrated Amplifiers</p>}
        {isHovering && <p className="shopList">Power Amplifiers</p>}
        {isHovering && <p className="shopList">Tube Amplifiers</p>}
      </div>
    </header>
  );
};

export default Header;
