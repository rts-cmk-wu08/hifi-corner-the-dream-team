import Breadcrumbs from "../components/Breadcrumb";
import Invoice from "../components/Invoice";

const InvoicePage = () => {
  return (
    <section className="invoicepage">
      <Breadcrumbs />
      <h2 className="invoicepage__h2">Thank you for your order!</h2>
      <Invoice />
    </section>
  );
};

export default InvoicePage;
