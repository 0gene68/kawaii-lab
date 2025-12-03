import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import klLogo from "./assets/img/klLogo.svg";
import fzLogo from "./assets/img/fzLogo.svg";
import ctLogo from "./assets/img/ctLogo.svg";
import ssLogo from "./assets/img/ssLogo.svg";
import csLogo from "./assets/img/csLogo.svg";
import type { Member } from "./../../backend/src/types/Member";

function App() {
  const [users, setUsers] = useState<Member[]>([]);

  // 백엔드에서 mock 데이터 가져오기
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/users")
      .then((res) => setUsers(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <img src={klLogo} id="klLogo" alt="Kawaii Lab Logo" />
      <div>
        <img src={fzLogo} className="logo" alt="Fruits Zipper logo" />
        <img src={ctLogo} className="logo" alt="Candy Tune logo" />
      </div>
      <div>
        <img src={ssLogo} className="logo" alt="Sweet Steady logo" />
        <img src={csLogo} className="logo" alt="Cutie Street logo" />
      </div>
    </>
  );
}

export default App;
