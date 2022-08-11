import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom"
import './App.css';
import Card from 'react-bootstrap/Card';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Skill from "./components/Skill";
import Contact from "./components/Contact";

function App() {

  return (
    <div className="App">
      <nav>
        <Navigation />
      </nav>
      <main>
        <Home />
        <About />
        <Project />
        {/* <Routes>
          <Route path = "/" element = { <Home/> } />
          <Route path = "/about-me" element= { <About/> } />
          <Route path = "/projects" element = { <Project/> } />
          <Route path = "/skills" element = { <Skill/> } />
          <Route path = "/contact" element = { <Contact /> } />
        </Routes> */}
      </main>
    </div>
  );
}

export default App;
