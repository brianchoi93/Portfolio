import { Link } from 'react-router-dom';
import '../styles/Navigation.css';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Element, Events, animateScroll as scroll, scroller } from 'react-scroll'

function Navigation(props) {
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
              <Nav.Link href="/about-me">About</Nav.Link>
              <Nav.Link href="/projects">Projects</Nav.Link>
              {/* <Nav.Link href="/skills">Skills</Nav.Link> */}
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="https://docs.google.com/document/d/1jMCklSXmRvxtPlw_NSoqROH22MQ30ToBMUeUw1ac5Q4/edit?usp=sharing" target="_blank">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
}

export default Navigation;