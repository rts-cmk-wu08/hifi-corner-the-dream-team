import "./App.scss";
import Button from "./components/Button";
import ContactInfo from "./components/ContactInfo";
import ProductImage from "./components/productImage";
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <Button destination="/homepage" text="test" />
      <ProductImage />
      <Header />
    </div>
  );
}

export default App;