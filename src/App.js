import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import DeliveryMethods from "./templates/deliveryMethods";


function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
        <DeliveryMethod/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
