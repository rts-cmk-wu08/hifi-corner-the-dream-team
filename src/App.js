import "./App.scss";
import Button from "./components/Button";
import ContactInfo from "./components/ContactInfo";
import ProductImage from "./components/productImage";

function App() {
  return (
    <div className="App">
      <Button destination="/homepage" text="test" />
      <ProductImage />
      <ContactInfo />
    </div>
  );
}

export default App;