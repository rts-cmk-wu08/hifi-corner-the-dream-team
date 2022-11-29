import "./App.scss";
import Button from "./components/Button";
import ProductImage from "./components/productImage";

function App() {
  return (
    <div className="App">
      <Button destination="/homepage" text="test" />
      <ProductImage />
    </div>
  );
}

export default App;
