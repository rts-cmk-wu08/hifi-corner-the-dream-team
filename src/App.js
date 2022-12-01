import "./App.scss";

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
      <ContactInfo />
      <HomePage />
      <SearchBar />
      <Header />
      <Video />
      <Faq />
      </div>
      )
      }

export default App;
