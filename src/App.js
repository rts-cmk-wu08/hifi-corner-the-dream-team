import "./App.scss";

import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="app">
      <Invoice />
      <ContactInfo />
      <HomePage />
      <SearchBar />
      <Header />
      </div>
      )
      }


export default App;
