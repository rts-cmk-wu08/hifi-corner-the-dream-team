import { Outlet } from "react-router-dom";
import "./App.scss";
import Productpage from "./pages/ProductPage";
import Footer from "./templates/Footer";
import Header from "./components/Header";


function App() {
  return (
    <div className="app">
      <Productpage />
      <Header />
      <Footer />
      </div>
  );
}

export default App;
