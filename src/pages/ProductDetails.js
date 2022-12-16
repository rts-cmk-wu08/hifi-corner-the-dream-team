import Button from "../components/Button";
import ColorCheckbox from "../components/ColorCheckbox";
import CountItems from "../components/CountItems";
import axios from "axios";
import { useEffect, useState } from "react";

const ProductDetails = () => {

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [products, setProducts] = useState();

  useEffect(() => {
    axios("http://localhost:4000/products?_limit=1")
    .then(response => setProducts(response.data))
    .catch(() => setError("Oops!!, something went wrong"))
    .finally(() => setLoading(false))
  }, []);

  return (
    <div>
    <article className="details">
      <h1 className="details__h1">PRODUCT</h1>
      <section className="details__card">
        <section className="details__product">
          {/* gallery */}
          <img src="" alt="" />
          {loading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {products && products.map(product => (
            <div className="details__txt">
            <h4 className="details__h4">{product.name}</h4>

         
            <h5 className="details__h5">(Digital Output)</h5>
            <p className="details__p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ut
              dolor. Quaerat dolorem id eum eos maxime nostrum expedita possimus
              deleniti. Beatae obcaecati similique expedita qui quod possimus
              in? Quibusdam aliquam alias ea nihil inventore quod, tempore eius
              ducimus ex temporibus, veniam ratione commodi voluptas, expedita
              hic fugiat deserunt provident.
            </p>
            <p className="details__p">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, ut
              dolor. Quaerat dolorem id eum eos maxime nostrum expedita possimus
              deleniti. tempore eius ducimus ex temporibus, veniam ratione
              commodi voluptas, expedita hic fugiat deserunt provident.
            </p>
            <h4 className="details__h4 details__h4--price">£ 4,799.00</h4>
            <div className="details__color">
              <ColorCheckbox color="black" />
              <ColorCheckbox color="silver" />
              <ColorCheckbox color="gold" />
            </div>
            <div className="details__cart">
              <CountItems />
              <Button destination="/" text="Add to cart" />
            </div>
          </div>
        ))}
    </section>
        <section className="details__specification">
          <h3 className="details__h3">product specification</h3>
          <table className="details__table">
            <tbody>
              <tr className="details__tr">
                <td className="details__td details__td--br">Navn 1</td>
                <td className="details__td">Data 1</td>
              </tr>
              <tr className="details__tr">
                <td className="details__td details__td--br">Navn 2</td>
                <td className="details__td">Data 2</td>
              </tr>
              <tr className="details__tr">
                <td className="details__td details__td--br">Navn 3</td>
                <td className="details__td">Data 3</td>
              </tr>
              <tr className="details__tr">
                <td className="details__td details__td--br">Navn 4</td>
                <td className="details__td">Data 4</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </article>
    </div>
  );
};

export default ProductDetails;
