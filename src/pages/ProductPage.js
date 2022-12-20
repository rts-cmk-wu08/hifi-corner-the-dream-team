import ProductCardTwo from "../templates/productCardTwo";
import ProductCard from "../templates/productCard";
import { useEffect, useState } from "react";
import axios from "axios";


const Productpage = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState();


  useEffect(() => {
    axios("http://localhost:4000/products")
    .then(response => setProducts(response.data))
    .catch(() => setError("Oops!!, something went wrong"))
    .finally(() => setLoading(false))
  }, []);


  return (
    <section className="product-page">
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <h1 className="product-page__h1">products</h1>
      <div className="product-page__2grid">
        <section className="product-page__sort">
          <div className="product-page__choice"></div>
          <div className="product-page__choice"></div>
          <div className="product-page__choice"></div>
        </section>
        <div className="product-page__3grid">
          <ProductCardTwo />
        {products && products.map(product => (
          <ProductCard product={product}/>

        ))}
        </div>
      </div>
    </section>
  );
};

export default Productpage;
