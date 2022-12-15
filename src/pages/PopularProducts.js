import ProductCard from "../templates/productCard";
import { useEffect, useState } from "react";
import axios from "axios";

const PopularProducts = () => {

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
      <>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
        {products && products.map(product => (
          <ProductCard product={product}/>

        ))}

        </>
  );
};

export default PopularProducts;
