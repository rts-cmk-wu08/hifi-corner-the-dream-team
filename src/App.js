import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
//import CartContextProvider from "./context/cartContext";
import { ShoppingCartProvider } from "./context/CartContext.tsx";


function App() {
  return (
    <ShoppingCartProvider>
      <div className="app">
        <Header />
        <main className="main">
          {/* <FetchTest /> */}
          <Outlet />
        </main>
        <Footer />
        </div>
       </ShoppingCartProvider>
  );
}

export default App;
