import '../styles/Home.css';
import Project from './Project';
import Skill from './Skill';

function Home(props) {
  return (
    <div className="home-container">
      <title>Home</title>
      <h1 className="welcome-msg">Hello! I'm Brian Choi</h1>
      <p>Software Engineer based in Los Angeles, CA</p>
    </div>
  );
}

export default Home;