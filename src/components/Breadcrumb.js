import { FaShoppingCart, FaReceipt } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { HiCreditCard } from "react-icons/hi";

const Breadcrumbs = () => {
  return (
    <section className="breadcrumb">
      <section className="breadcrumb__background"></section>
      <section className="breadcrumb__container">
        <IconContext.Provider value={{ className: "breadcrumb__faIcon" }}>
          <div className="breadcrumb__icon">
            {" "}
            <FaShoppingCart />{" "}
          </div>
        </IconContext.Provider>
        <IconContext.Provider
          value={{ className: "breadcrumb__faIcon breadcrumb__faIcon--large" }}
        >
          <div className="breadcrumb__icon">
            <HiCreditCard />
          </div>
        </IconContext.Provider>
        <IconContext.Provider value={{ className: "breadcrumb__faIcon" }}>
          <div className="breadcrumb__icon">
            <FaReceipt />
          </div>
        </IconContext.Provider>
      </section>
    </section>
  );
};

export default Breadcrumbs;
