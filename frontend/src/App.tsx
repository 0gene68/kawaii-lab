import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CardPage from "./components/CardPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:cardId" element={<CardPage />} />
      </Routes>
    </>
  );
}

export default App;
