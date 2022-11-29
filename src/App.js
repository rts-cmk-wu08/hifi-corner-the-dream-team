import "./App.scss";
import Button from "./components/Button";
import ContactInfo from "./components/ContactInfo";
import Invoice from "./components/Invoice";

function App() {
  return (
    <div className="App">
      <Button destination="/homepage" text="test" />
      <Invoice />
    </div>
  );
}

export default App;
