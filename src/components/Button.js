import { Link } from "react-router-dom";

const Button = (props) => {
  return (
    <button className="button login__btn">
      <Link className="button__link" to={props.destination}>
        {props.text}
      </Link>
    </button>
  );
};

export default Button;
