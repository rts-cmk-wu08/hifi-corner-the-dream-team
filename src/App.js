import { Outlet } from "react-router-dom";
import "./App.scss";
<<<<<<< HEAD
import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";
import ImageSlider from "./templates/ImageSlider";
import { SliderData } from "./templates/SliderData";
=======
import Footer from "./templates/Footer";
import Header from "./components/Header";

>>>>>>> 7804c93ed8e1c6dbaf9f8ad53725e043497edb6d

function App() {
  return (
    <div className="app">
      <Header />
<<<<<<< HEAD
      <ImageSlider slides={SliderData} />;
    </div>
      )
    }

=======
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
>>>>>>> 7804c93ed8e1c6dbaf9f8ad53725e043497edb6d

export default App;
