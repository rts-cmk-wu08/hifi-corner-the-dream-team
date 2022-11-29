import "./App.scss";
import SearchBar from "./components/SearchBar";
import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <SearchBar />
      <Button destination="/homepage" text="test" />
      <Invoice />
      <ContactInfo />
      <Header />
    </div>
  );
}

export default App;