
import { useState } from "react";  
import { Link } from "react-router-dom";

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
        <nav className="headerNavbar">
        <Link to={"/Homepage"}><img className="hif1cornerlogo" src="hifi-corner-logo-01.svg" alt="hifi corner logo" /></Link>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="navbar__onLine">shop</li>
          <Link to={"/AboutUs"}><li className="navbar__onLine">about us</li></Link>
          <Link to={"/ContactUs"}><li className="navbar__onLine">contact us</li></Link>
          <li
            className="shopElmNav"
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            shop
          </li>
        </nav>
        
        <div className="div__shopList" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
        {isHovering && <p className="browseShopList">Browse Categories</p>}
        <Link to= {"/CDPlayers"}> {isHovering && <p className="shopList">CD Players</p>} </Link>
        <Link to= {"/CDPlayers"}> {isHovering && <p className="shopList">DVD Players</p>} </Link>
        <Link to= {"/Preamps"}> {isHovering && <p className="shopList">Preamps</p>} </Link>
        <Link to= {"/Speakers"}> {isHovering && <p className="shopList">Speakers</p>} </Link>
        <Link to= {"/Turntabels"}> {isHovering && <p className="shopList">Turntabels</p>} </Link>
        <Link to= {"/IntegratedAmplifiers"}> {isHovering && <p className="shopList">Integrated Amplifiers</p>} </Link>
        <Link to= {"/PowerAmplifiers"}> {isHovering && <p className="shopList">Power Amplifiers</p>} </Link>
        <Link to= {"/TubeAmplifiers"}> {isHovering && <p className="shopList">Tube Amplifiers</p>} </Link>
        </div>
    </header>
  );
};

export default Header;
