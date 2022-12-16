import { Outlet } from "react-router-dom";
import "./App.scss";
// import ContactInfo from "./components/ContactInfo";
// import Invoice from "./components/Invoice";
// import SearchBar from "./components/SearchBar";
// import HomePage from "./pages/HomePage";
// import ImageSlider from "./templates/ImageSlider";
// import { SliderData } from "./templates/SliderData";
import Footer from "./templates/Footer";
import Header from "./components/Header";
// import HomePage from "./pages/HomePage";
// import CartCard from "./templates/cartCard";
// import PaymentPageForm from "./templates/paymentPageForm";
import CartContextProvider from "./context/cartContext";
import Footer from "./templates/Footer";
import Header from "./components/Header";
//import CartContextProvider from "./context/cartContext";


function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
