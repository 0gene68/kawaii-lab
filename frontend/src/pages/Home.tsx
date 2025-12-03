import klLogo from "../assets/img/klLogo.svg";
import fzLogo from "../assets/img/fzLogo.svg";
// import ctLogo from "../assets/img/ctLogo.svg";
// import ssLogo from "../assets/img/ssLogo.svg";
// import csLogo from "../assets/img/csLogo.svg";
import LogoCard from "../components/LogoCard";
import { useEffect, useState } from "react";
import type { Team } from "./../../../backend/src/types/Team";
import axios from "axios";
import "../css/Home.css";

function Home() {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/teams")
      .then((res) => setTeams(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <img src={klLogo} id="klLogo" alt="Kawaii Lab Logo" />
      <div>
        {teams.map((team) => (
          <LogoCard img={fzLogo} text={team.name} />
        ))}
      </div>
    </>
  );
}

export default Home;
