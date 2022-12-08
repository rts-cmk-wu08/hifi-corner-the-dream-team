import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import Video from "./components/Video";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <Header />
      <Video />
      <HomePage />
      <Outlet />
      <Footer />

      </div>
  );
}

export default App;
