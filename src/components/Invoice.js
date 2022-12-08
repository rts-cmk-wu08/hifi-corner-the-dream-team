const Invoice = () => {
  return (
    <section className="invoice">
      <div>
        <div className="invoice__billing-adr">
          <p className="invoice__p invoice__p--dark">Navn</p>
          <p className="invoice__p">Adresse</p>
          <p className="invoice__p">Land</p>
          <p className="invoice__p">P: Telefonnummer</p>
          <p className="invoice__p">M: mail</p>
        </div>
        <div className="invoice__shipping-adr">
          <h4 className="invoice__h4 invoice__h4--grey">delivery adress</h4>
          <p className="invoice__p invoice__p--dark">Navn</p>
          <p className="invoice__p">Adresse</p>
          <p className="invoice__p">Land</p>
          <p className="invoice__p">P: Telefonnummer</p>
          <p className="invoice__p">M: mail</p>
        </div>
      </div>

      <div className="invoice__seller">
        <img src="" alt="" />
        <p className="invoice__p invoice__p--dark">44 Cow Wynd, Falkirk</p>
        <p className="invoice__p invoice__p--dark">Central Region, FK1 1PU</p>
        <p className="invoice__p">0131 556 7901 </p>
        <p className="invoice__p">sales@hificorner.co.uk</p>
      </div>
      <div className="invoice__label">
        <h3 className="invoice__h3">invoice</h3>
        <p className="invoice__p invoice__p--light">Order number</p>
        <p className="invoice__p invoice__p--light">Dynamisk data</p>
        <p className="invoice__p invoice__p--light">Date</p>
        <p className="invoice__p invoice__p--light">Dynamisk data</p>
        <p className="invoice__p invoice__p--light">Shop</p>
        <p className="invoice__p invoice__p--light">Dynamisk data</p>
        <p className="invoice__p invoice__p--light">Currency</p>
        <p className="invoice__p invoice__p--light">Dynamisk data</p>
      </div>
      <table className="invoice__items">
        <thead>
          <tr className="invoice__table-head">
            <th className="invoice__h4" scope="col">
              item description
            </th>
            <th className="invoice__h4" scope="col">
              price
            </th>
            <th className="invoice__h4" scope="col">
              quantity
            </th>
            <th className="invoice__h4" scope="col">
              total
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="invoice__p invoice__p--left" scope="row">
              Dynamisk navn
            </td>
            <td className="invoice__p invoice__p--center">dynamisk pris</td>
            <td className="invoice__p invoice__p--center">dynamisk antal</td>
            <td className="invoice__p  invoice__p--right">Dynamisk total</td>
          </tr>

        </table>
      </div>

        </tbody>
      </table>
      <section className="invoice__total">
        <div className="invoice__flex">
          <h4 className="invoice__h4">SUBTOTAL</h4>
          <h4 className="invoice__h4">£ dynamisk data</h4>
        </div>
        <div className="invoice__flex">
          <h4 className="invoice__h4">vat</h4>
          <h4 className="invoice__h4">£ dynamisk data</h4>
        </div>
        <div className="invoice__flex">
          <h4 className="invoice__h4">delivery</h4>
          <h4 className="invoice__h4">£ dynamisk data</h4>
        </div>
        <div className="invoice__flex invoice__flex--grey-bg">
          <h4 className="invoice__h4">total</h4>
          <h4 className="invoice__h4">£ dynamisk data</h4>
        </div>
      </section>
      <p className="invoice__bottom invoice__p">
        <span className="invoice__p--dark">Address:</span> 44 Cow Wynd, Falkirk,
        Central Region, FK1 1PU |{" "}
        <span className="invoice__p--dark">Phone:</span> 0131 556 7901 |{" "}
        <span className="invoice__p--dark">Mail:</span>
        sales@hificorner.co.uk
      </p>

    </section>
  );
};

export default Invoice;
