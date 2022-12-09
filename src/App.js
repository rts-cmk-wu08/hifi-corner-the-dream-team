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
      <main className="main">
        <Outlet />
      </main>
      <Footer />

    </div>
  );
}

export default App;
