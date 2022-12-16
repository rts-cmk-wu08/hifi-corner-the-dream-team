import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Video from "./components/Video";
import HomePage from "./pages/HomePage";
import CartCard from "./templates/cartCard";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <ShoppingCartProvider>
      <div className="app">
        <Header />
        <main className="main">
          <Outlet />
        </main>
        <Footer />
       </ShoppingCartProvider>
      </div>
  );
}

export default App;
