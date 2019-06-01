import React from 'react';


// import '../About.css';



function About() {

    
    
  return (
      <div className='about-container' id='about'>
        <div className='about-text-container'>
        <h1>About</h1>
          <p></p>

          <p className='about-text'>
            After becoming obsessed with automating google sheets I decided to dip my toe a 
            little deeper into the world of code...  I started studying Ruby and a few months 
            later had enrolled myself into Northcoders bootcamp based in Manchester. From here I 
            learnt fundamental Javascript which led to me creating fullstack web applications 
            using Node.js, Express.js, Postgresql and React.
          </p>

          <p className='about-text'>
            Being a very visual person, my passion tends to lean towards front end; I seem to
            get a kick out of making things look nice whilst also being functional, which perhaps
            lends from having a degree in Product Design.
          </p>

          <p className='about-text'>
            In my spare time you can find me playing around in Photoshop and Illustrator, making
            poor attempts of music in Ableton, running around the streets of Manchester trying to keep fit
            or doing the occasional lightning talk.
          </p>

        </div>
       
      </div>

  );
}

export default About;