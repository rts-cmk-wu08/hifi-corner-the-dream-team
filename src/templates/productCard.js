import Button from "../components/Button";
import Price from "../components/price";
import { useEffect, useState } from "react";
import axios from "axios";


const ProductCard = (props) => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState();
  
  useEffect(() => {
    axios("http://localhost:4000/products?_limit=4")
    .then(response => setProducts(response.data))
    .catch(() => setError("Oops!!, something went wrong"))
    .finally(() => setLoading(false))
  }, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {products && products.map(product => (
        <section className="product-card">
      <img className="product-card__img" src={product.image.url} alt={props.alt} />
      <div className="product-card__txt">
          <h3 className="product-card__h3">{product.name}</h3>
          <p>{product.general.dimensions}</p>
      </div>
          <Price className="product-card__price" price={product.price + ".00"} />
      <Button destination="/productdetails" text="Read more" />
    </section>
          ))}
    </div>
  );
};

export default ProductCard;
