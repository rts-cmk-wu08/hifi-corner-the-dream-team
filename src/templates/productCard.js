import Button from "../components/Button";
import Price from "../components/price";
import ProductImage from "../components/productImage";

const ProductCard = (props) => {
  return (
    <section className="product-card">
      <ProductImage src="./produktbilleder/cd_afspillere/creek_classic_cd.jpg" />
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
