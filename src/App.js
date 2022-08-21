import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";

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
      </main>
    </div>
  );
}

export default App;
