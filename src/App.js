import "./App.scss";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import Video from "./components/Video";
import HomePage from "./pages/HomePage";
import CartCard from "./templates/cartCard";

function App() {
  return (
    <div className="app">
      < CartCard />
      <HomePage />
      <SearchBar />
      <Header />
      <Video />
      </div>
      )
      }


export default App;
