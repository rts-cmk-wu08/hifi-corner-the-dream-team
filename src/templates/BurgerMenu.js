import { useState } from "react";
import { Link } from "react-router-dom";

const BurgerMenu = () => {

    const [burger_class, setBurgerClass] = useState("burger-bar unclicked");
    const [menu_class, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    const updateMenu = () => {
        if(!isMenuClicked) {
            setBurgerClass("burger-bar clicked")
            setMenuClass("menu visible")
        } else {
            setBurgerClass("burger-bar unclicked")
            setMenuClass("menu hidden")
        }
        setIsMenuClicked(!isMenuClicked)
    }

    return ( 
        <div style={{width: '100%', height: '100vh'}}>
            <nav>
                <div className="burger-menu" onClick={updateMenu}>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                    <div className={burger_class}></div>
                </div>

            </nav>

            <div className={menu_class}>
                <ul className="grid__menu">
                    <Link to={"/Homepage"}><img className="hificornerlogo" src="hifi-corner-logo-01.svg" alt="hifi corner logo" /></Link>
                    <Link to={"/Shop"} className="navbar__onLine text__decoration"><li className="navbar__online font__size">Shop</li></Link>
                    <Link to={"/AboutUs"} className="text__decoration"><li className="navbar__onLine font__size">about us</li></Link>
                    <Link to={"/ContactUs"} className="text__decoration"><li className="navbar__onLine font__size">contact us</li></Link>
                </ul>
            </div>
        </div>
     );
}
 
export default BurgerMenu;