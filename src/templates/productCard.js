// import Button from "../components/Button";
// import Price from "../components/price";

const ProductCard = ({ product }) => {
  return (
    <section className="product-card">
      {/* <img className="product-card__img" src={product.image.url} alt={product.alt} />
      <div className="product-card__txt">
          <h3 className="product-card__h3">{product.name}</h3>
          <p className="product-card__dimensions">{product.general.dimensions}</p>
      </div>
          <Price className="product-card__price" price={product.price + ".00"} />
      <Button destination={`/productdetails/${product.id}`} text="Read more" /> */}
    </section>
  );
};

export default ProductCard;
