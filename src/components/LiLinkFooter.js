import { Link } from "react-router-dom";

const LiLinkFooter = (props) => {
    return ( 
        <li className="padding__top"><Link className="footer__link" to={props.destination}>{props.text}</Link></li>
     );
}
 
export default LiLinkFooter;