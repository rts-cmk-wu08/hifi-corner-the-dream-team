import { FiPhone } from "react-icons/fi";
import { RiFacebookCircleLine } from "react-icons/ri";
import { AiOutlineYoutube, AiOutlineInstagram } from "react-icons/ai";
import { RxTwitterLogo } from "react-icons/rx";
import LiLinkFooter from "../components/LiLinkFooter";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer__info">
        <ul className="footer__nav">
          <LiLinkFooter
            className="home"
            destination="/"
            text="Home"
          ></LiLinkFooter>
          <LiLinkFooter
            className="shop"
            destination="/productpage"
            text="Shop"
          ></LiLinkFooter>
          <LiLinkFooter
            className="aboutus"
            destination="/aboutus"
            text="About Us"
          ></LiLinkFooter>
        </ul>
        <ul className="footer__nav">
          <LiLinkFooter
            className="returns__refunds"
            destination="/moreinfo"
            text="Returns & Refunds"
          ></LiLinkFooter>
          <LiLinkFooter
            className="delivery"
            destination="/moreinfo"
            text="Delivery"
          ></LiLinkFooter>
          <LiLinkFooter
            className="privacy__policy"
            destination="/moreinfo"
            text="Privacy Policy"
          ></LiLinkFooter>
          <LiLinkFooter
            className="term__conditions"
            destination="/moreinfo"
            text="Term & Conditions"
          ></LiLinkFooter>
        </ul>
        <section className="footer__nav">
          <p className="footer__link">Contact</p>
          <p className="footer__text">2 Joppa Rd, Edinburgh, EH15 2EU</p>
          <p className="footer__text  footer__text--icon">
            <FiPhone className="footer__icon" /> 0131 556 7901
          </p>
          <p className="footer__text footer__text--icon">
            44 Cow Wynd, Falkirk, Central Region, FK1 1PU
          </p>
          <p className="footer__text footer__text--icon">
            <FiPhone className="footer__icon" /> 01324 629 011
          </p>
          <div className="footer__some-icons">
            <Link>
              <RiFacebookCircleLine className="footer__some-icon" />
            </Link>
            <Link>
              <AiOutlineYoutube className="footer__some-icon" />
            </Link>
            <Link>
              <RxTwitterLogo className="footer__some-icon" />
            </Link>
            <Link>
              <AiOutlineInstagram className="footer__some-icon" />
            </Link>
          </div>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
