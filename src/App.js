import { Routes, Route, Link } from "react-router-dom"
import './App.css';
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <main>
        <Routes>
        </Routes>
      </main>
    </div>
  );
}

export default App;
