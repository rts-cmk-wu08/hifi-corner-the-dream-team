import useFetch from "../hooks/useFetch";
import { useContext } from "react";
import { CartContext } from "../context/cartContext";

const ProductCardTwo = (props) => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products"
  );
  const { addToCart, increaseCount, removeFromCart } = useContext(CartContext);
  //product er bare en props der bliver defineret som test.attributes når jeg kalder handleAddToCart
  const handleAddToCart = (product) => {
    addToCart({
      id: product.id,
      title: product.title,
      subtitle: product.subtitle,
      price: product.price,
      count: 1,
    });
  };

  const handleIncreaseCount = (product) => {
    increaseCount({
      id: product.id,
    });
  };

  const handleDecrease = (product) => {
    removeFromCart({
      id: product.id,
      title: product.title,
      subtitle: product.subtitle,
      price: product.price,
      count: 1,
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  data && console.log(data.data[0].attributes);
  return (
    <div>
      {data.data.map((test) => (
        <div key={test.id} className="product-card">
          <div className="product-card__txt">
            <h3 className="product-card__h3">{test.attributes.title}</h3>
            <p className="product-card__dimension">
              {test.attributes.subtitle}
            </p>
            <br />
          </div>
          <div className="product-card__btn-box">
            <button
              className="product-card__btn"
              onClick={() => {
                handleDecrease(test.attributes);
              }}
            >
              -
            </button>
            <input type="text"></input>
            <button
              className="product-card__btn"
              onClick={() => {
                handleIncreaseCount(test.attributes);
              }}
            >
              +
            </button>
          </div>
          <button
            className="product-card__btn"
            onClick={() => {
              handleAddToCart(test.attributes);
            }}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default ProductCardTwo;
