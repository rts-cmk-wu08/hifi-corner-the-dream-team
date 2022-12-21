import AddButton from "../components/addToCartBtn";
import Price from "../components/price";

const ProductCard = ({ product }) => {
  return (
    <section className="product-card">
      <img
        className="product-card__img"
        src={product.image.url}
        alt={product.alt}
      />
      <div className="product-card__txt">
        <h3 className="product-card__h3">{product.name}</h3>
        <p className="product-card__dimensions">{product.general.dimensions}</p>
      </div>
      <Price className="product-card__price" price={product.price + ".00"} />
      <AddButton text="Add to cart" addBtn={product.id} />
    </section>
  );
};

export default ProductCard;
