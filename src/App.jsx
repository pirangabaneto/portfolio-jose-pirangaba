import { useState } from "react";
import "./App.css";
import Presentation from "./components/Presentation";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Apresentação */}
      <Presentation />

      {/* Sobre mim */}
      <AboutMe />

      {/* Serviços */}
      <Services />

      {/* Projetos */}
      <Projects />

      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
