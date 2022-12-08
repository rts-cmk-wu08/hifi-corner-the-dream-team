import "./App.scss";
import ShoppingCart from "./components/ShoppingCart";
import Footer from "./templates/Footer";
import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <ShoppingCart />
      <Header />
      <Outlet />
      <Footer />

      </div>
  );
}

export default App;
