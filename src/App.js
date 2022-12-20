import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
//import CartContextProvider from "./context/cartContext";
import { ShoppingCartProvider } from "./context/CartContext.tsx";
import Video from "./components/Video";


function App() {
  return (
    <ShoppingCartProvider>
      <div className="app">
        <Header />
        <Video />
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
