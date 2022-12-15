import "./App.scss";
import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";
import ImageSlider from "./templates/ImageSlider";
import { SliderData } from "./templates/SliderData";

function App() {
  return (
    <div className="app">
      <Invoice />
      <ContactInfo />
      <HomePage />
      <SearchBar />
      <Header />
      <ImageSlider slides={SliderData} />;
    </div>
      )
    }


export default App;
