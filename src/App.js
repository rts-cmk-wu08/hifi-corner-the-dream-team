import "./App.scss";
import Header from "./components/Header";
import Footer from "./templates/Footer";
import { Outlet } from "react-router";
// import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div className="app">
      <Header />
      <Footer className="footer" />
      <Outlet />
      </div>
  );
}

export default App;
