const Invoice = () => {
  return (
    <section className="invoice">
      <div>
        <div className="invoice__billing-adr">
          <p className="invoice__p--dark">Navn</p>
          <p className="invoice__p">Adresse</p>
          <p className="invoice__p">Land</p>
          <p className="invoice__p">P: Telefonnummer</p>
          <p className="invoice__p">M: mail</p>
        </div>
        <div className="invoice__shipping-adr">
          <h4 className="invoice__h4">delivery adress</h4>
          <p className="invoice__p--dark">Navn</p>
          <p className="invoice__p">Adresse</p>
          <p className="invoice__p">Land</p>
          <p className="invoice__p">P: Telefonnummer</p>
          <p className="invoice__p">M: mail</p>
        </div>
      </div>
      <div className="invoice__seller">
        <img src="" alt="" />
        <p className="invoice__p--dark">44 Cow Wynd, Falkirk</p>
        <p className="invoice__p--dark">Central Region, FK1 1PU</p>
        <p className="invoice__p">0131 556 7901 </p>
        <p className="invoice__p">sales@hificorner.co.uk</p>
      </div>
      <div className="invoice__info">
        <h3 className="invoice__h3">invoice</h3>
        <table className="invoice__table">
          <tr className="invoice__label">
            <td className="invoice__p">Order number</td>
            <td className="invoice__p">Date</td>
            <td className="invoice__p">Shop</td>
            <td className="invoice__p">Currency</td>
          </tr>
          <tr className="invoice__label">
            <td className="invoice__p">Dynamisk data</td>
            <td className="invoice__p">Dynamisk data</td>
            <td className="invoice__p">Dynamisk data</td>
            <td className="invoice__p">Dynamisk data</td>
          </tr>
        </table>
      </div>
    </section>
  );
};

export default Invoice;
