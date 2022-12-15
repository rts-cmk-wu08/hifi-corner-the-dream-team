import ProductCardTwo from "../templates/productCardTwo";

const Productpage = () => {
  return (
    <section className="product-page">
      <h1 className="product-page__h1">products</h1>
      <div className="product-page__2grid">
        <section className="product-page__sort">
          <div className="product-page__choice"></div>
          <div className="product-page__choice"></div>
          <div className="product-page__choice"></div>
        </section>
        <div className="product-page__3grid">
          <ProductCardTwo />
        </div>
      </div>
    </section>
  );
};

export default Productpage;
