import AddButton from "../components/addToCartBtn";
import ColorCheckbox from "../components/ColorCheckbox";
import CountItems from "../components/CountItems";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Price from "../components/price";
import { CartContext } from "../context/cartContext";

const ProductDetails = () => {
  const params = useParams();
  console.log(params);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [product, setProduct] = useState();

  useEffect(() => {
    axios("http://localhost:4000/products/" + params.id)
      .then((response) => setProduct(response.data))
      .catch(() => setError("Oops!!, something went wrong"))
      .finally(() => setLoading(false));
  }, [params.id]);

  product && console.log(product.specifications);
  console.log(product);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <article className="details">
        <h1 className="details__h1">PRODUCT</h1>
        <section className="details__card">
          <section className="details__product">
            <img className="product__image" src={product.image.url} alt="" />
            <div className="details__txt">
              <h4 className="details__h4">{product.name}</h4>
              <h5 className="details__h5">(Digital Output)</h5>
              <p className="details__p">{product.description}</p>
              <div className="details__color">
                <ColorCheckbox />
              </div>
              <Price
                className="details__h4 details__h4--price"
                price={product.price + ".00"}
              />
              <div className="details__cart">
                <CountItems idPlus={product.id} idMinus={product.id} />
                <AddButton text="Add to cart" addBtn={product.id} />
              </div>
            </div>
          </section>
          <section className="details__specification">
            <h3 className="details__h3">product specification</h3>
            <table className="details__table">
              <tbody>
                {product.specifications.map((specification) => (
                  <tr className="details__tr">
                    <td className="details__td details__td--br">
                      {specification.name}
                    </td>
                    <td className="details__td">{specification.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </section>
        </section>
      </article>
    </div>
  );
};

export default ProductDetails;
