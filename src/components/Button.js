import { Link } from "react-router-dom";
import { CartContext } from "../context/cartContext.js";
import { useContext } from "react";

const Button = (props) => {
  const { handleAddToCart } = useContext(CartContext);

  return (
    <button className="button" onClick={() => handleAddToCart(props.addBtn)}>
      <Link className="button__link" to={props.destination}>
        {props.text}
      </Link>
    </button>
  );
};

export default Button;
