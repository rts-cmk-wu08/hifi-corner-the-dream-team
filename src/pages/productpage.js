import ProductCard from "../templates/productCard";

const Productpage = () => {
  return (
    <section className="product-page">
      <h2 className="product-page__h2">products</h2>
      <div className="product-page__2grid">
        <section className="product-page__sort">
          <div className="product-page__choice"></div>
          <div className="product-page__choice"></div>
          <div className="product-page__choice"></div>
        </section>
        <div className="product-page__3grid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </section>
  );
};

export default Productpage;
