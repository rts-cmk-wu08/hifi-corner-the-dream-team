import ReactMarkdown from "react-markdown";
import useFetch from "../hooks/useFetch";

const MoreInfo = () => {
  const { loading, error, data } = useFetch("http://localhost:1337/api/faq");

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  console.log(data);
  return (
    <>
      <h1 className="faq__h1">FAQ</h1>
      <section className="faq">
        <div className="faq__txt">
          <h3 className="faq__h3">{data.data.attributes.title}</h3>
          <ReactMarkdown>{data.data.attributes.body}</ReactMarkdown>
        </div>
      </section>
    </>
  );
};

export default MoreInfo;
