import "./App.scss";
import Header from "./components/Header";
import Footer from "./templates/Footer";
import { Outlet } from "react-router-dom";

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
