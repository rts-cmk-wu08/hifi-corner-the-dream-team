import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";

function App() {
  return (
    <div className="">
      <Footer />
      
      <Outlet />
    </div>
  );
}

export default App;