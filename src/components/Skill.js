import '../styles/Skill.css';
import { Col, ListGroup, Row, Tab } from "react-bootstrap";

function Skills(props) {
  return (
    <Tab.Container defaultActiveKey="languages">
      <Row>
        <Col sm={12}>
          <ListGroup>
            <ListGroup.Item action href="#languages">Languages</ListGroup.Item>
            <ListGroup.Item action href="#libfra">Libraries & Frameworks</ListGroup.Item>
            <ListGroup.Item action href="#database">Database</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane className="skill-list" eventKey="#languages">
              <ul className="skill-ul">
                <img src="../images/JavaScript.png" alt="" />
                <li>JavaScript</li>
                <img src="" alt="" />
                <li>Python</li>
                <img src="../images/html.png" alt="" />
                <li>HTML5</li>
                <img src="../images/css.png" alt="" />
                <li>CSS3</li>
              </ul>
            </Tab.Pane>
            <Tab.Pane className="skill-list" eventKey="#libfra">
              <ul className="skill-ul">
                <li><img src="../images/reactjs.png" alt="" /></li>
                <li>React.js</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>Django</li>
              </ul>
            </Tab.Pane>
            <Tab.Pane className="skill-list" eventKey="#database">
              <ul className="skill-ul">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
              </ul>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    // <div>
    //   <h1>Skills</h1>
    //   <h3>Languages</h3>
    //   <ul>
    //     <li>JavaScript</li>
    //     <li>Python</li>
    //     <li>HTML5</li>
    //     <li>CSS3</li>
    //   </ul>
    //   <h3>Libraries & Frameworks</h3>
    //   <ul>
    //     <li>React.JS</li>
    //     <li>Node.JS</li>
    //     <li>Express.JS</li>
    //     <li>Django</li>
    //   </ul>
    //   <h3>Database</h3>
    //   <ul>
    //     <li>PostgreSQL</li>
    //     <li>MongoDB</li>
    //     <li>Mongoose</li>
    //   </ul>
    // </div>
  );
}

export default Skills;