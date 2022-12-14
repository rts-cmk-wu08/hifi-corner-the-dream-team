import useFetch from "../hooks/useFetch";
import AddButton from "./addToCartBtn";

const FetchTest = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);

  return (
    <section className="product-card">
      {data.data.map((test) => (
        <div className="product-card__txts">
          <p>{test.attributes.title}</p>
          <p>{test.attributes.subtitle}</p>
          <br />
          <AddButton text="Add to cart" />
        </div>
      ))}
    </section>
  );
};

export default FetchTest;
