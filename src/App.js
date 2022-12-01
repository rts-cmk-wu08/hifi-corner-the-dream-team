import "./App.scss";
import SearchBar from "./components/SearchBar";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <SearchBar />
      <Header />
    </div>
  );
}

export default App;
