import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Video from "./components/Video";
import HomePage from "./pages/HomePage";
import CartCard from "./templates/cartCard";
import ContactInfo from "./components/ContactInfo";
import HomePage from "./pages/homepage";

function App() {
  return (
    <div className="app">
      <ContactInfo />
      <HomePage />
      <SearchBar />
      <Header />
      <Video />
      <Footer />
      
      <Outlet />
      </div>
     </div>
  );
}

export default App;
