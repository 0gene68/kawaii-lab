import klLogo from "../assets/img/klLogo.svg";
import fzLogo from "../assets/img/fzLogo.svg";
import ctLogo from "../assets/img/ctLogo.svg";
import ssLogo from "../assets/img/ssLogo.svg";
import csLogo from "../assets/img/csLogo.svg";
import LogoCard from "../components/LogoCard";
import "../css/Home.css";

function Home() {
  return (
    <>
      <img src={klLogo} id="klLogo" alt="Kawaii Lab Logo" />
      <div>
        <LogoCard img={fzLogo} text={"FRUITS ZIPPER"} />
        <LogoCard img={ctLogo} text={"CANDY TUNE"} />
        <LogoCard img={ssLogo} text={"SWEET STEADY"} />
        <LogoCard img={csLogo} text={"CUTIE STREET"} />
      </div>
    </>
  );
}

export default Home;
