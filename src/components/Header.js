import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <header>
            <nav>
            <li>Home</li> 
            <Link to= {"/AboutUs"}>About us</Link> 
            <Link to= {"/Contactpage"}>Contact us</Link> 
            </nav>
        </header>
     );
}
 
export default Header;