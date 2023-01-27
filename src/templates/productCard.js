import Button from "../components/Button";
import Price from "../components/price";
import { newShoppingCartContext } from "../context/newShoppingCartContext";
import { useContext } from "react";


const ProductCard = ({ product }) => {

  const { addToCart } = useContext(newShoppingCartContext)

  const handleAddToCart = () => {
    console.log("haløj")
    addToCart({
      name: product.name,
      id: product.id,
      image: product.image,
      stock: product.stock,
      count: 1,
      price: product.price
    })

  }

  return (

    <section className="product-card">
      <img className="product-card__img" src={product.image.url} alt={product.alt} />
      <div className="product-card__txt">
        <h3 className="product-card__h3">{product.name}</h3>
        <p className="product-card__dimensions">{product.general.dimensions}</p>
      </div>
      <Price className="product-card__price" price={product.price + ".00"} />
      <Button destination={`/productdetails/${product.id}`} text="Read more" />
      <button onClick={handleAddToCart}>Add to Cart</button>
    </section>
  );
};

export default ProductCard;
