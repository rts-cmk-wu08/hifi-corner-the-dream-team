import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
//import CartContextProvider from "./context/cartContext";
//import { ShoppingCartProvider } from "./context/CartContext.tsx";
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
