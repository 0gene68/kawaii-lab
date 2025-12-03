import "./App.css";
import klLogo from "./assets/img/klLogo.svg";
import fzLogo from "./assets/img/fzLogo.svg";
import ctLogo from "./assets/img/ctLogo.svg";
import ssLogo from "./assets/img/ssLogo.svg";
import csLogo from "./assets/img/csLogo.svg";

function App() {
  return (
    <>
      <img src={klLogo} id="klLogo" alt="Kawaii Lab Logo" />
      <div>
        <div className="logo-container">
          <img src={fzLogo} className="logo" alt="Fruits Zipper logo" />
          <span className="tooltip-text">Fruits Zipper</span>
        </div>
        <div className="logo-container">
          <img src={ctLogo} className="logo" alt="Candy Tune logo" />
          <span className="tooltip-text">Candy Tune</span>
        </div>
        <div className="logo-container">
          <img src={ssLogo} className="logo" alt="Sweet Steady logo" />
          <span className="tooltip-text">Sweet Steady</span>
        </div>
        <div className="logo-container">
          <img src={csLogo} className="logo" alt="Cutie Street logo" />
          <span className="tooltip-text">Cutie Street</span>
        </div>
      </div>
    </>
  );
}

export default App;
