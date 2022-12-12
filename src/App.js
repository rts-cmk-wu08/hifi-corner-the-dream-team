import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import DeliveryMethods from "./templates/DeliveryMethods";


function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Outlet />
        <DeliveryMethods/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
