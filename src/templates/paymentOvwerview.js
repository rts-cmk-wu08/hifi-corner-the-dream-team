//import CustomCheckbox from "../formComponents/customeCheckbox";

const PaymentOverview = () => {
  return (
    <article>
      <section className="payment-overview">
        <h3 className="your-info__h3">Payment overview</h3>
        <ul className="payment-overview__ul">
          <li className="payment-overview__li">
            <p className="payment__overview__p">Auralic Aries G2.1 Streamer</p>
            <p className="payment__overview__p">£4,799.00</p>
          </li>
          <li className="payment-overview__li">
            <p className="payment__overview__p">Auralic Aries G2.1 Streamer</p>
            <p className="payment__overview__p payment__overview__p--right">
              £4,799.00
            </p>
          </li>
          <li className="payment-overview__li payment-overview__li--right">
            <p className="payment-overview__p">
              Total price
              <span className="payment-overview__p--black">£9,598.00</span>
            </p>
          </li>
        </ul>
        <ul className="payment-overview__ul payment-overview__ul--delivery">
          <li className="payment-overview__li">
            <p className="payment-overview__p">Delivery price</p>
            <p className="payment-overview__p">£4.00</p>
          </li>
          <li className="payment-overview__li">
            <p className="payment-overview__p">VAT</p>
            <p className="payment-overview__p">£4,799.00</p>
          </li>
          <li className="payment-overview__li payment-overview__li--right">
            <p className="payment-overview__p">
              Total price
              <span className="payment-overview__p--black">£9,598.00</span>
            </p>
          </li>
        </ul>
      </section>
      {/* <section className="payment-overview__checkbox">
        <CustomCheckbox type="checkbox" name="newsletter" />
        <CustomCheckbox type="checkbox" name="terms" />
      </section> */}
    </article>
  );
};

export default PaymentOverview;
