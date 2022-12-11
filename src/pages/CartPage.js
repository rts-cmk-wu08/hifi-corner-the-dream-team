import Breadcrumbs from "../components/Breadcrumb";
import CustomInputTwo from "../formComponents/CustonInput";

const CartPage = () => {
  return (
    <section className="cartpage">
      <Breadcrumbs />
      <article className="cartpage__info">
        <CustomInputTwo />
      </article>
    </section>
  );
};

export default CartPage;
