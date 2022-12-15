import { Outlet } from "react-router-dom";
import "./App.scss";
import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";
import ImageSlider from "./templates/ImageSlider";
import { SliderData } from "./templates/SliderData";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import ContactFormTwo from "./formComponents/contactForm";

import CartContextProvider from "./context/cartContext";

function App() {
  return (
    <CartContextProvider>
      <div className="app">
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
      </div>
    </CartContextProvider>
  );
}

export default App;
