import Button from "../components/Button";
import { GrClose } from "react-icons/gr";
import CountItems from "../components/CountItems";

const ShoppingCartComponent = () => {
  return (
    <section className="shopping-cart">
      <div className="shopping-cart__heading">
        <h1 className="shopping-cart__h1">Cart</h1>
        <p>( items)</p>
      </div>
      <ul className="shopping-cart__ul">
        <li className="shopping-cart__li">
          <div className="shopping-cart__top">
            <img
              src="./produktbilleder/cd_afspillere/creek_classic_cd.jpg"
              alt=""
              className="shopping-cart__img"
            />
            <GrClose className="shopping-cart__close" />
            <div className="shopping-cart__title">
              <h3 className="shopping-cart__h3">Auralic Aries G2.1 Streamer</h3>
              <p className="shopping-cart__in-stock">In stock</p>
            </div>
          </div>
          <div className="shopping-cart__amount">
            <CountItems />
            <p className="shopping-cart__price">£ 4,799.00</p>
          </div>
        </li>
      </ul>
      <div className="shopping-cart__total">
        <p className="shopping-cart__subtotal">Sub total:</p>
        <p className="shopping-cart__price-total">£ 4,799.00</p>
      </div>
      <div className="shopping-cart__btn">
        <Button destination="/cartpage" title="Go to cart" />
        <Button destination="/paymentpage" title="Go to payment" />
      </div>
    </section>
  );
};

export default ShoppingCartComponent;
