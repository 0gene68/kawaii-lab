import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FruitsZipper from "./pages/FruitsZipper";
import CandyTune from "./pages/CandyTune";
import SweetSteady from "./pages/SweetSteady";
import CutieStreet from "./pages/CutieStreet";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/FruitsZipper" element={<FruitsZipper />} />
        <Route path="/CandyTune" element={<CandyTune />} />
        <Route path="/SweetSteady" element={<SweetSteady />} />
        <Route path="/CutieStreet" element={<CutieStreet />} />
      </Routes>
    </>
  );
}

export default App;
