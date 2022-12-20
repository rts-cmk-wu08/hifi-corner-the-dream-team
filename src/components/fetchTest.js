import { useShoppingCart } from "../context/CartContext.tsx";
import useFetch from "../hooks/useFetch";

//import CountItems from "./CountItems";

const FetchTest = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products"
  );

  const {
    getItemQuantity,
    increaseCartQuantity,
    decreaseCartQuantity,
    removeFromCart,
  } = useShoppingCart();

  const quantity = getItemQuantity;

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);

  //   const titles = data.data.map((test) => test.attributes.title);
  //   console.log(titles);

  return (
    <section className="product-card">
      {data.data.map((products) => (
        <div className="product-card__txts">
          <p>{products.attributes.title}</p>
          <p>{products.attributes.subtitle}</p>
          <br />
          <button onClick={() => increaseCartQuantity(products.attributes.id)}>
            Add item
          </button>
          <br />
          <button onClick={() => decreaseCartQuantity(products.attributes.id)}>
            -
          </button>
          <span>{quantity}</span>
          <button onClick={() => increaseCartQuantity(products.attributes.id)}>
            +
          </button>
        </div>
      ))}
    </section>
  );
};

export default FetchTest;
