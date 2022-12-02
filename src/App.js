import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import ContactPage from "./pages/ContactPage";

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
