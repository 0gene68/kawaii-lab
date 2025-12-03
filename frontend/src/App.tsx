import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import type { User } from "./../../backend/server";
import klLogo from "./assets/img/klLogo.svg";
import fzLogo from "./assets/img/fzLogo.svg";
import ctLogo from "./assets/img/ctLogo.svg";
import ssLogo from "./assets/img/ssLogo.svg";
import csLogo from "./assets/img/csLogo.svg";

function App() {
  const [count, setCount] = useState<number>(0);
  const [users, setUsers] = useState<User[]>([]);

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
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <h1>Users</h1>
      <ul>
        {users.map((u) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
