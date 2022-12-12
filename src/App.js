import { Outlet } from "react-router-dom";
import "./App.scss";
import Footer from "./templates/Footer";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";
import CartCard from "./templates/cartCard";
import PaymentPageForm from "./templates/paymentPageForm";

function App() {
  return (
    <div className="app">
      < PaymentPageForm />
      < CartCard />
      <HomePage />
      <SearchBar />
      <Header />
      <main className="main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default App;
