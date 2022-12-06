import "./App.scss";
import Header from "./components/Header";
import Footer from "./templates/Footer";
import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";
    
function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
  );
}

export default App;
