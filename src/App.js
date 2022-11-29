import "./App.scss";
import ContactInfo from "./components/ContactInfo";
import ProductImage from "./components/productImage";
import Header from "./components/Header"

function App() {
  return (
    <div className="App">
      <ProductImage />
      <ContactInfo />
      <Header />
    </div>
  );
}

export default App;