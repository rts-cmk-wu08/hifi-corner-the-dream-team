import "./App.scss";
import Header from "./components/Header";
import Footer from "./templates/Footer";
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
