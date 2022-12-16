import { Link } from "react-router-dom";
import { useShoppingCart } from "../context/CartContext.tsx";
import useFetch from "../hooks/useFetch";

const AddButton = (props) => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products/"
  );
  const { getItemQuantity, increaseCartQuantity } = useShoppingCart();
  const quantity = getItemQuantity(data.data.id);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  //console.log(data);

  return (
    <section>
      <button
        className="button"
        onClick={() => increaseCartQuantity(data.data.id)}
      >
        <Link className="button__link" to={props.destination}>
          {props.text}
        </Link>
      </button>
    </section>
  );
};

export default AddButton;
