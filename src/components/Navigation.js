import '../styles/Navigation.css';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Contact from './Contact';

function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="md" bg="inherit" variant="dark">
        <Container>
          <Navbar.Brand>
            <img className="logo-img" src="../images/bc-logo.png" alt="initial-logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar" />
          <Navbar.Collapse>
            <Nav>
              <Nav.Link name="home" href="/">Home</Nav.Link>
              <Contact />
              <Nav.Link href="https://docs.google.com/document/d/1jMCklSXmRvxtPlw_NSoqROH22MQ30ToBMUeUw1ac5Q4/edit?usp=sharing" target="_blank">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default Navigation;