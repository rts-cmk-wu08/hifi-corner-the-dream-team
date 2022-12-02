import { Outlet } from "react-router-dom";
import "./App.scss";

import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import Productpage from "./pages/ProductPage";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <Productpage />
      <Header />
      <Video />
      <Footer />
      </div>
  );
}

export default App;
