import "./App.scss";
import Header from "./components/Header";
import Footer from "./templates/Footer";


function App() {
  return (
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
  );
}

export default App;
