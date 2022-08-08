import { Routes, Route, Link } from "react-router-dom"
import './App.css';
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";

function App() {
  return (
    <div className="App">
      <nav>
        <Nav />
      </nav>
      <main>
        <Routes>
          <Route path = "/" element = { <HomePage/> } />
          <Route path = "/aboutme" element= { <AboutMe/> } />
          <Route path = "/projects" element = { <Project/> } />
          <Route path = "/skills" element = { <Skills/> } />
          <Route path = "/contactme" element = { <ContactMe /> } />
        </Routes>
      </main>
    </div>
  );
}

export default App;
