import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Main from "./components/main";
import data from "./data.json";
import filmData from "./data2.json";
import Character from "./components/character";

function App() {
  const [click, setClick] = useState({
    name: "test-name",
    hairColor: "test-haircolor",
    eyeColor: "test-eyecolor",
    skinColor: "test-skinscolor",
  });

  return (
    <div className="container">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Main data={data} filmData={filmData} setClick={setClick} />
            }
          />
          <Route
            path="/character"
            element={<Character data={data} click={click} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
