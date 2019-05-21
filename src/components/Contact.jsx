import React from 'react';

import '../../node_modules/devicon/devicon.css'
import '../Contact.css';



function Contact() {

    
    
  return (
      <div className='contact-container' id='contact'>
        <h1>contact me...</h1>
        <p></p>
        <a href='https://www.linkedin.com/in/tim-dowd-8a0295113/' rel="noopener noreferrer" target="_blank"><img src={require(".././images/linkedin.svg")} alt="linkedin" /></a>
        <a href='mailto:timdowd1984@gmail.com' rel="noopener noreferrer" target="_blank"><img src={require(".././images/email.svg")} alt="email" /></a>
      </div>

  );
}

export default Contact;