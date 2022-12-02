import "./App.scss";
import Productpage from "./pages/ProductPage";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";
import SearchBar from "./components/SearchBar";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <Header />
      <ContactPage/>
      <Footer className="footer" />
      </div>
  );
}

export default App;
