import React from 'react';
import { Link } from 'react-router-dom';

function Nav(props) {
  return (
    <div>
      <Link to = "/">Home</Link>
      <Link to = "/about-me">About Me</Link>
      <Link to = "/projects">Projects</Link>
      <Link to = "/skills">Skills</Link>
      <Link to = "/contact">Contact Me</Link>
    </div>
  );
}

export default Nav;