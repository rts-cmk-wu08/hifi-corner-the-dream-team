import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { IoPersonSharp } from "react-icons/io5"
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  // const [isHovering, setIsHovering] = useState(false);

  // const handleMouseOver = () => {
  //   setIsHovering(true);
  // };

  // const handleMouseOut = () => {
  //   setIsHovering(false);
  // };

  const [visible, setVisible] = useState(false);

  const handlevisibility = () => {
    setVisible(!visible)
  }
  console.log(visible)


  return (

  //   <header className="header">
  //     <div className="header__wrapper">
  //       <nav className="header__navbar">
  //       <Link className="text__decoration" to={"/"}><img className="hif1cornerlogo" src="hifi-corner-logo-01.svg" alt="hifi corner logo" /></Link>
  //         <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="navbar__onLine">shop</li>
  //         <Link className="text__decoration" to={"/AboutUs"}><li className="navbar__onLine">about us</li></Link>
  //         <Link className="text__decoration" to={"/ContactUs"}><li className="navbar__onLine">contact us</li></Link>
         
  //         {/* <li
  //           className="shopElmNav"
  //           onMouseOver={handleMouseOver}
  //           onMouseOut={handleMouseOut}
  //           >
  //         </li> */}

          
  //       {/* <div className="div__shopList" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
  //       {isHovering && <p className="browseShopList">Browse Categories</p>}
  //       <Link to= {"/CDPlayers"} className="text__decoration"> {isHovering && <p className="shopList">CD Players</p>} </Link>
  //       <Link to= {"/CDPlayers"} className="text__decoration"> {isHovering && <p className="shopList">DVD Players</p>} </Link>
  //       <Link to= {"/Preamps"} className="text__decoration"> {isHovering && <p className="shopList">Preamps</p>} </Link>
  //       <Link to= {"/Speakers"} className="text__decoration"> {isHovering && <p className="shopList">Speakers</p>} </Link>
  //       <Link to= {"/Turntabels"} className="text__decoration"> {isHovering && <p className="shopList">Turntabels</p>} </Link>
  //       <Link to= {"/IntegratedAmplifiers"} className="text__decoration"> {isHovering && <p className="shopList">Integrated Amplifiers</p>} </Link>
  //       <Link to= {"/PowerAmplifiers"} className="text__decoration"> {isHovering && <p className="shopList">Power Amplifiers</p>} </Link>
  //       <Link to= {"/TubeAmplifiers"} className="text__decoration"> {isHovering && <p className="shopList">Tube Amplifiers</p>} </Link>
  //       </div> */}
  //     </nav>

  //     <div className="header__right">
  //         <SearchBar />
  //         <IoPersonSharp className="profile__icon"/>
  //         <FaShoppingCart className="cart__icon"/>
  //     </div>
  //   </div>
  // </header>
 
  <header className={visible ? "visible" : ``}>
  <div className='header__wrapper'>
  <nav className='header__navbar'>
    <Link className="text__decoration" to={"/"}><img className="hif1cornerlogo" src="hifi-corner-logo-01.svg" alt="hifi corner logo" /></Link>
    <li className='white__text list__style__type shop nav__li' activeClassName="selected" onClick={handlevisibility}>Shop</li>
      <Link className="text__decoration white__text list__style__type nav__li" activeClassName="active" to={"/AboutUs"}><li className="navbar__onLine">about us</li></Link>
      <Link className="text__decoration white__text list__style__type nav__li" activeClassName="active" to={"/ContactPage"}><li className="navbar__onLine">contact us</li></Link>
    </nav>
     <div className="header__right">
      <SearchBar />
      <IoPersonSharp className="profile__icon white__text"/>
      <FaShoppingCart className="cart__icon white__text"/>
   </div>
     {/* <div className="cartContainer">

     </div> */}
    </div>
     <ul className={`cartContainerItems ${visible ? "cartContainerItems--visible" : ""}`}>
        <h2 className='black browse__categories'>Browse Categories</h2>
      <div className='categories__wrapper'>
        <li className="list__style__type gap__text">
            <Link to= {"/CDPlayers"} className="text__decoration product__list">CD Players</Link>
          </li>
        <li className="list__style__type gap__text">
            <Link to= {"/CDPlayers"} className="text__decoration product__list">DVD Players</Link>
        </li>
        <li className="list__style__type gap__text">
            <Link to= {"/Preamps"} className="text__decoration product__list">Preamps</Link>
        </li>
        <li className="list__style__type gap__text">
            <Link to= {"/Speakers"} className="text__decoration product__list">Speakers</Link>
        </li>
        <li className="list__style__type gap__text">
            <Link to= {"/Turntabels"} className="text__decoration product__list">Turntabels</Link>
        </li>
        <li className="list__style__type gap__text">
            <Link to= {"/IntegratedAmplifiers"} className="text__decoration product__list">Integrated Amplifiers</Link>
        </li>
        <li className="list__style__type gap__text">
            <Link to= {"/PowerAmplifiers"} className="text__decoration product__list">Power Amplifiers</Link>
        </li>
        <li className="list__style__type gap__text">
            <Link to= {"/TubeAmplifiers"} className="text__decoration product__list">Tube Amplifiers</Link>
        </li>
      </div>
      
      </ul>  
  </header>
  );
};

export default Header;

