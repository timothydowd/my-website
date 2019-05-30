import React from 'react';

// import '../Header.css';
import '../../node_modules/devicon/devicon.css'

function Header() {

  return (
      <header>
        <div className='header-container' id='home'>
          <h1>Tim Dowd</h1>
          <h3>Software Developer / Northcoders Graduate / Peanut Butter Fan</h3>
          <p></p>
          <i className="devicon-javascript-plain"></i>
          <i className="devicon-react-original"></i>
          <i className="devicon-express-original"></i>
          <i className="devicon-html5-plain"></i>
          <i className="devicon-css3-plain"></i>
          <i className="devicon-bootstrap-plain"></i>
          <i className="devicon-mocha-plain"></i>
          <i className="devicon-git-plain"></i>
          </div>
      </header>
  );
}

export default Header;