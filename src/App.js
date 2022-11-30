import "./App.scss";
import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Invoice />
      <ContactInfo />
      <Header />
    </div>
  );
}

export default App;
