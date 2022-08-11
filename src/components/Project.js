import { Card, Button, Nav } from "react-bootstrap";
import '../styles/Project.css'

function Project() {
  return (
    <div className="project-container">
      <h1 className="proj-header">Featured Projects</h1>
      <Card className="card-container">
        <Card.Body>
          <Card.Title>Filmster</Card.Title>
          <Card.Text className="proj-text">
              Filmster is a MERN stack web application, with CRUD functionality, that displays movies that are currently being played in theaters and movies that'll hit the theaters soon.
          </Card.Text>
          <Button>
            <Nav.Link href="https://filmster-bc.netlify.app/" target="_blank">Filmster</Nav.Link>
          </Button>
          <Button>
            <Nav.Link href="https://github.com/brianchoi93/Filmster" target="_blank">View Repo!</Nav.Link>
          </Button>
        </Card.Body>
      </Card>
      <Card className="card-container">
        <Card.Body>
          <Card.Title>BadJJR (Group Project)</Card.Title>
          <Card.Text className="proj-text">
            BadJJR is a MERN stack application with full CRUD functionaltiy where users are able to make and take quizzes. Application also includes features like authorization where users will be able to create an account allowing them to make, edit, and delete quizzes that they have made.
          </Card.Text>
          <Button>
            <Nav.Link href="https://badjjr.netlify.app/" target="_blank">BadJJR</Nav.Link>
          </Button>
          <Button>
            <Nav.Link href="https://github.com/badjjr/badjjr-frontend" target="_blank">View Repo!</Nav.Link>
          </Button>
        </Card.Body>
      </Card>
      <Card className="card-container">
        <Card.Body>
          <Card.Title>Valodex</Card.Title>
          <Card.Text className="proj-text">
            Valodex is a web application based on the highly popular first person shoot game called "Valorant". Traverse the different pages to view pertinent information and grow your knowledge to help you better understand the game!
          </Card.Text>
          <Button>
            <Nav.Link href="https://valodex.netlify.app/" target="_blank">Valodex</Nav.Link>          
          </Button>
          <Button>
            <Nav.Link href="https://github.com/brianchoi93/valodex" target="_blank">View Repo!</Nav.Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Project;