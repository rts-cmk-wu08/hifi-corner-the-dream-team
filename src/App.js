import "./App.scss";
import Header from "./components/Header";
import Footer from "./templates/Footer";

<<<<<<< HEAD
import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";
=======
>>>>>>> 5fe2a1e23dae5f08aaf5b64ebd198b99975a5c92

function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
  );
}

export default App;
