// import logo from './logo.svg';
import "./App.css";
import "./index.css";
import Game from "./components/Game";
import { ReactComponent as CanopyLogo } from "./media/Canopy-Logo.svg";

function App() {
  return (
    <div>
      <header>
        <CanopyLogo id="canopyLogo"></CanopyLogo>
        <h1>Tic-Tac-Toe</h1>
      </header>
      <Game></Game>
    </div>
  );
}

export default App;
