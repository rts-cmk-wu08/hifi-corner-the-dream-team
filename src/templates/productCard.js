import Button from "../components/Button";
import Price from "../components/price";
import { useState, useEffect } from "react";
//import { GoSettings } from "react-icons/fa";

const ProductCard = (props) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [product, setProduct] = useState();

  const productURL = "http://localhost:4000/categories";

  return (
    <section className="product-card">
      <img className="product-card__img" src={props.src} alt={props.alt} />
      <div className="product-card__txt">
        <h3 className="product-card__h3">Dynamisk titel {props.titel}</h3>
        <h3 className="product-card__h3">Dynamisk titel {props.output}</h3>
      </div>
      <Price className="product-card__price" price="pris" />
      <Button destination="/productdetails" text="Read more" />
    </section>
  );
};

export default ProductCard;
