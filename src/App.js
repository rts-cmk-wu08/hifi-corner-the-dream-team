import "./App.scss";
import CountItems from "./components/CountItems";
import Header from "./components/Header";
import CartProvider from "./contexts/CartContext";


function App() {

  return (
    <CartProvider>
    <div className="">
      <Header />
      <CountItems />
    </div>
    </CartProvider>
  );
}

export default App;