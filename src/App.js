import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Video from "./components/Video";
import HomePage from "./pages/HomePage";
import CartCard from "./templates/cartCard";
import ContactInfo from "./components/ContactInfo";
import Faq from "./templates/Faq";

function App() {
  return (
    <div className="app">
      <Header />
      <Video />
      <Faq />
      <Footer />
      </div>
  );
}

export default App;
