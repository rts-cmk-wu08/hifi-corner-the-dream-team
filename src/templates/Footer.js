import { FiPhone } from "react-icons/fi"
import { RiFacebookCircleLine } from "react-icons/ri"
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai"
import { RxTwitterLogo } from "react-icons/rx"
import LiLinkFooter from "../components/LiLinkFooter";

const Footer = () => {
    return ( 
        <footer className="footer">
            <ul className="footer__nav">
            <LiLinkFooter className="home" destination="/" text="Home"></LiLinkFooter>
            <LiLinkFooter className="shop" destination="/productpage" text="Shop"></LiLinkFooter>
            <LiLinkFooter className="aboutus" destination="/aboutus" text="About Us"></LiLinkFooter>
            </ul>
            <div className="creditcards">
                <img src="./produktbilleder/cards 1.png" alt="" />
                <p className="footer__text hifi__text__footer">Hi Fi Corner (Edinburgh) Ltd is registered in Scotland. No: SC049298. Registered office: 2 Joppa Rd, Edinburgh EH15 2EU</p>
            </div>
            <ul className="footer__nav footer__nav--middle">
                <LiLinkFooter className="returns__refunds" destination="" text="Returns & Refunds"></LiLinkFooter>
                <LiLinkFooter className="delivery" destination="" text="Delivery"></LiLinkFooter>
                <LiLinkFooter className="privacy__policy" destination="" text="Privacy Policy"></LiLinkFooter>
                <LiLinkFooter className="term__conditions" destination="" text="Term & Conditions"></LiLinkFooter>
            </ul>
            <ul className="footer__nav footer__nav--right">
                <LiLinkFooter className="contact" destination="/contact" text="Term & Conditions"></LiLinkFooter>  
                <li className="address__right">
                    <p className="footer__text">2 Joppa Rd, Edinburgh, EH15 2EU</p>
                </li>
                <li className="phone__number">
                    <FiPhone className="phone__icon footer__text"/> 
                    <p className="footer__text">0131 556 7901</p>
                </li>
                <li className="address__right">
                    <p className="footer__text">44 Cow Wynd, Falkirk, Central Region, FK1 1PU</p>
                </li>
                <li className="phone__number">
                     <FiPhone className="phone__icon footer__text"/> 
                    <p className="footer__text">01324 629 011</p>
                </li>
                <ul className="icons__flex">
                <li className="facebook__icon">
                    <RiFacebookCircleLine className="footer__text" />
                </li>
                <li className="youtube__icon">
                    <AiOutlineYoutube className="footer__text" />
                </li>
                <li className="twitter__icon">
                    <RxTwitterLogo className="footer__text"/>
                </li>
                <li className="insta__icon">
                    <AiOutlineInstagram className="footer__text"/>
                </li>
                </ul>
            </ul>
        </footer>
     );
    }
    
export default Footer;