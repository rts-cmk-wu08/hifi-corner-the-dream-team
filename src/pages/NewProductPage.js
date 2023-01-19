import ProductCardTwo from "../templates/productCardTwo";
import ProductCard from "../templates/productCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

const NewProductPage = () => {
  const baseUrl = "http://localhost:4000/products"

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState();
  const [fetchUrl, setFetchUrl] = useState(baseUrl);

  const [params] = useSearchParams()

  console.log(params.getAll("search"))

  console.log(params)

  useEffect(() => {
    
    console.log("url params changed")
    if (params.get("search") !== null ) {
        setFetchUrl(baseUrl + `?q=${params.get("search")}`)
    } else {
        setFetchUrl(baseUrl)
    }
  }, [params]);


  useEffect(() => {
    axios(fetchUrl)
      .then((response) => setProducts(response.data))
      .catch(() => setError("Oops!!, something went wrong"))
      .finally(() => setLoading(false));
    console.log(products);
  }, [fetchUrl]);
  // dependency array 

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
          {products &&
            products.map((product) => <ProductCard product={product} />)}
        </div>
      </div>
    </section>
  );
};

export default NewProductPage;
