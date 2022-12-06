import "./App.scss";
import CountItems from "./components/CountItems";
import Header from "./components/Header";
import DestinatioProvider from "./contexts/DestinationContext";

function App() {
  return (
    <DestinatioProvider>
    <div className="">
      <Header />
      <CountItems />
    </div>
    </DestinatioProvider>
  );
}

export default App;