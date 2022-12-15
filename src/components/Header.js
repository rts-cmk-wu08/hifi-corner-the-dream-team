<<<<<<< HEAD
import { useState } from "react";  
import { Link } from "react-router-dom";
=======
import { useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { IoPersonSharp } from "react-icons/io5"
import { FaShoppingCart } from "react-icons/fa";
>>>>>>> 7804c93ed8e1c6dbaf9f8ad53725e043497edb6d

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
<<<<<<< HEAD
    <header>
        <nav className="headerNavbar">
        <Link to={"/Homepage"}><img className="hif1cornerlogo" src="hifi-corner-logo-01.svg" alt="hifi corner logo" /></Link>
          <li onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} className="navbar__onLine">shop</li>
          <Link to={"/AboutUs"}><li className="navbar__onLine">about us</li></Link>
          <Link to={"/ContactUs"}><li className="navbar__onLine">contact us</li></Link>
        
          <img className="hif1cornerlogo" src="hifi-corner-logo-01.svg" alt="hifi corner logo"/>
          <li className="shopElmNav" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >shop</li>
          <li>about us</li>
          <li>contact us</li>
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
=======

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
    <NavLink className="text__decoration" to={"/"}><img className="hif1cornerlogo" src="hifi-corner-logo-01.svg" alt="hifi corner logo" /></NavLink>
    <li className='white__text list__style__type shop nav__li {}' onClick={handlevisibility}>Shop</li>
      <NavLink className="text__decoration white__text list__style__type nav__li" to={"/AboutUs"}><li className="navbar__onLine">about us</li></NavLink>
      <NavLink className="text__decoration white__text list__style__type nav__li" to={"/ContactPage"}><li className="navbar__onLine">contact us</li></NavLink>
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
>>>>>>> 7804c93ed8e1c6dbaf9f8ad53725e043497edb6d
  );
};

export default Header;

