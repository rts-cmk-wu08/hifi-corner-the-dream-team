import "./App.scss";
import Button from "./components/Button";
import ContactInfo from "./components/ContactInfo";

function App() {
  return <div className="App">
    <Button destination="/homepage" text="test"/>
    <ContactInfo />
  </div>
}

export default App;