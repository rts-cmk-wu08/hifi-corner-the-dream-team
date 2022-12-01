import "./App.scss";

import ContactInfo from "./components/ContactInfo";
import HomePage from "./pages/homepage";

function App() {
  return (
    <div className="app">
      <ContactInfo />
      <HomePage />
    </div>
  );
}

export default App;
