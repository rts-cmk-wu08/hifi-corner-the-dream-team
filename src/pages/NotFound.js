import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="not-found">
      <h1>OOPS!</h1>
      <p>Du leder efter noget der ikke findes her på vores side!!</p>
      <p>
        Tryk<Link to={"/"}> her</Link> for at komme tilbage til forsiden.
      </p>
    </section>
  );
};

export default NotFound;
