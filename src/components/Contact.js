import { useState } from 'react';
import '../styles/Contact.css'
import { Modal, Form, Button, Nav } from 'react-bootstrap';
import { IoLogoGithub, IoMailOutline, IoLogoLinkedin } from "react-icons/io5";



function Contact() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Nav.Link variant="primary" onClick={handleShow}>
        Contact
      </Nav.Link>

      <Modal show={show} size="sm" onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Let's Talk!</Modal.Title>
          <Button onClick={handleClose} className="close-btn">X</Button>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Button href="https://github.com/brianchoi93" target="_blank">
              <IoLogoGithub />
            </Button>
            <Button href="https://www.linkedin.com/in/byoungkchoi/" target="_blank">
              <IoLogoLinkedin />
            </Button>
            <Button href="mailto:brianchoi93@gmail.com">
              <IoMailOutline />
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default Contact;