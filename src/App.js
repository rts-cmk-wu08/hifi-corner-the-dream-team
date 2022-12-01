import "./App.scss";

import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HomePage from "./pages/HomePage";
import Example from "./templates/Slider";

function App() {
  return (
    <div className="app">
      <Invoice />
      <ContactInfo />
      <HomePage />
      <SearchBar />
      <Header />
      <Example />
    </div>
      )
      }


export default App;
