import useFetch from "../hooks/useFetch";
import CountItems from "./CountItems";

const FetchTest = () => {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/products"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);

  //   const titles = data.data.map((test) => test.attributes.title);
  //   console.log(titles);

  return (
    <section className="product-card">
      {data.data.map((test) => (
        //<div key={test.id} className="test-product">
        <div className="product-card__txts">
          <p>{test.attributes.title}</p>
          <p>{test.attributes.subtitle}</p>
          <br />

        </div>
        //</div>
      ))}
    </section>
  );
};

export default FetchTest;