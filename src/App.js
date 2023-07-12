import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { GamePage } from "./pages/GamePage";
import "./app.css";

function App() {
  return (
    <div className="app container">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game/:gameId" element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
