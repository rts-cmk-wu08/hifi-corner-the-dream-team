import "./App.scss";
import SearchBar from "./components/SearchBar";
import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import Header from "./components/Header"
import CountItems from "./components/CountItems";

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Button destination="/homepage" text="test" />
      <Invoice />
      <ContactInfo />
      <CountItems />
      <Header />
    </div>
  );
}

export default App;