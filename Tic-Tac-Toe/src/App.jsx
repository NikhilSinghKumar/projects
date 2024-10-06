import "./App.css";
import AppTitle from "./components/AppTitle";
import Game from "./components/Game";

function App() {
  return (
    <div className="container">
      <AppTitle />
      <div>
        <Game />
      </div>
    </div>
  );
}

export default App;
