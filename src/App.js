import { Outlet } from "react-router-dom";
import "./App.scss";
// import ContactInfo from "./components/ContactInfo";
// import Invoice from "./components/Invoice";
// import SearchBar from "./components/SearchBar";
// import ImageSlider from "./templates/ImageSlider";
// import { SliderData } from "./templates/SliderData";
import Footer from "./templates/Footer";
// import HomePage from "./pages/HomePage";
// import CartCard from "./templates/cartCard";
// import PaymentPageForm from "./templates/paymentPageForm";
import Header from "./components/Header";
import Video from "./components/Video";
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
