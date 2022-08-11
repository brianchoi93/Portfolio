import '../styles/Contact.css'
import { Card, Form, Button } from 'react-bootstrap';

function Contact(props) {
  return (
    <div>
      <Card className="contact-container">
        <Card.Header className="contact-header">Let's Talk!</Card.Header>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="firstname" placeholder="First Name"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="lastname" placeholder="Last Name"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type = "email" placeholder="example@email.com"></Form.Control>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Send me a message</Form.Label>
            <Form.Control as="textarea" rows={4}></Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
}

export default Contact;