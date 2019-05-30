import React from 'react';

import '../../node_modules/devicon/devicon.css'
// import '../Contact.css';



function Contact() {

    
    
  return (
      <div className='contact-container' id='contact'>
     

        <div className='text-contact-container' >
          <h1>Contact Me</h1>
          <p></p>
          <a href='https://www.linkedin.com/in/tim-dowd-8a0295113/' rel="noopener noreferrer" target="_blank"><img className='contact-img' src={require(".././images/linkedin.svg")} alt="linkedin" /></a>
          <a href='mailto:timdowd1984@gmail.com' rel="noopener noreferrer" target="_blank"><img className='contact-img' src={require(".././images/gmail.svg")} alt="email" /></a>
        </div>

      </div>
  );
}

export default Contact;