import Video from "../components/Video";
import ProductCard from "../templates/productCard";

const HomePage = () => {
  return (
    <article className="homepage">
      <h2 className="homepage__h2">popular products</h2>
      <section className="homepage__products">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <Video />
      </section>
      <section className="homepage__info"></section>
    </article>
  );
};

export default HomePage;
