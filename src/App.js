import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import CartProvider from "./context/newShoppingCartContext";
// import Video from "./components/Video";
//import CartContextProvider from "./context/cartContext";
// import { ShoppingCartProvider } from "./context/CartContext.tsx";


function App() {
  return (
    // <ShoppingCartProvider>
  <CartProvider>
      <div className="app">
        <Header />
        <main className="main">
          {/* <FetchTest /> */}
          <Outlet />
        </main>
        <Footer />
        </div>
  </CartProvider>
     // <ShoppingCartProvider />
  );
}

export default App;
