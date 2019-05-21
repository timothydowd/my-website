import React from 'react';

import '../../node_modules/devicon/devicon.css'
import '../Contact.css';



function Contact() {

    
    
  return (
      <div className='contact-container'>
        <p>contact</p>
        {/* <i class="devicon-github-plain"></i> */}
        <img src={require(".././images/linkedin.svg")} alt="linkedin" />
        <img src={require(".././images/github.svg")} alt="github" />
        <img src={require(".././images/email.svg")} alt="email" />

        
      </div>

  );
}

export default Contact;