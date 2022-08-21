import Card from 'react-bootstrap/Card';
import '../styles/About.css'

function About() {
  return (
    <div className='about-div'>
      <h1>About Me</h1>
      <Card className='about-container'>
        <Card.Body className='about-body'>
          <h4>Hi, I'm Brian!</h4>
          <p className="about-par">
            I was born in South Korea and lived in So Cal for the majority of my life. I started my early career as a nurse and have had the satisfaction of helping many of those who were in need physically and mentally. My passion growing up has always been to be the helping hand to those who needed it.
          </p>
          <p className="about-par">
            After COVID-19 came crashing into this world and with all the craziness that it brought, I realized I've been putting a lot of time and effort into those that were in need, but have been greatly neglecting myself mentally and physically. I decided it was time for a break to re-cooperate myself and that's when I found my interest in coding. With an immense amount of consideration, I went from being a nurse to software engineer.
          </p> 
          <p className="about-par">
            As a nurse, I have to be constantly be on my feet and ready to spring into action. With my background in nursing, I'm able to work with others to tackle high-stress situations and complex problems!
          </p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default About;