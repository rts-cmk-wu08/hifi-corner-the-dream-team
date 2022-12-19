import "./App.scss";
import { Outlet } from "react-router-dom";
import ShoppingCartProvider from "./context/CartContext"
import Footer from "./templates/Footer";
import Header from "./components/Header";

function App() {
  return (
      <div className="app">
        <ShoppingCartProvider>
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
