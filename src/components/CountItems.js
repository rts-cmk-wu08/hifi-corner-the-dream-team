import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/cartContext.js";

const CountItems = (props) => {
  const [itemCount, setItemCount] = useState(0);

  const { handleAddToCart, handleRemoveFromCart, totalCount } =
    useContext(CartContext);

  useEffect(() => {
    console.log("test count");
  }, [itemCount]);

  return (
    <div className="flex__countitems">
      <button
        className="plus"
        onClick={() => handleRemoveFromCart(props.idPlus)}
      >
        -
      </button>
      <div className="count__box">{totalCount}</div>
      <button className="plus" onClick={() => handleAddToCart(props.idPlus)}>
        +
      </button>
    </div>
  );
};

export default CountItems;
