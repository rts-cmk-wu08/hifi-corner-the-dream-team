import { Link } from "react-router-dom";

const Button = (props) => {
    return ( 
        <Link className="button" to={props.destination}>{props.text}</Link>
     );
}
 
export default Button;