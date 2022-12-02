import { Outlet } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Video from "./components/Video";

function App() {
  return (
    <div className="app">
      <SearchBar />
      <Header />
      </div>
  );
}

export default App;
