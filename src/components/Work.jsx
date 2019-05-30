import React from 'react';


// import '../Work.css';


function Work() {

  return (
      <div className='work-container' id='work'>

        <div className='work-text-container'>

          <h1 className='work-h1' >Work</h1>
          <p className='textDescriptions'>
            Recent projects completed as part of the Northcoders fullstack bootcamp...
          </p>
          
          <div className='project-container1'>
            <div className='left-float'>
              <a href='https://ncnews-timdowd.netlify.com' rel="noopener noreferrer" target="_blank" ><img className='work-img' src={require('.././images/ncnews2.jpg')} alt="ncnews"></img></a>
            </div>
            <div className='right-float'>
              NCNews is a fullstack Reddit style news website where users can login, add and delete topics, articles and comments and like or dislike content. Backend RESTful API built in Node.js, Express.js with a Postgresql database and frontend built with React.js and Bootstrap. Testing carried out using Mocha, Chai and Supertest.
              <p><a href='https://ncnews-timdowd.netlify.com' rel="noopener noreferrer" target="_blank">Visit Website</a>  |  
                <a href='https://github.com/timothydowd/FE-NC-News' rel="noopener noreferrer" target="_blank">  FrontEnd Repo</a>  |  
                <a href='https://github.com/timothydowd/BE-NC-News' rel="noopener noreferrer" target="_blank">  BackEnd Repo</a></p>
            </div>
          </div>

          <div className='project-container2'>
            <div className='right-float2'>
              <img className='work-img' src={require('.././images/reserv3d.png')} alt="ncnews"></img>
            </div>
            <div className='left-float2'>
              Table booking mobile application where users can view a restaurant in 360/VR, and book an available table.  The projects front end was built in React 360 for the virtual environment, React Native for the mobile functionaility and backend in Node, Express and SQL.  This was a team project where I worked mostly on the virtual environment in React 360.
              <p><a href='https://github.com/timothydowd/react360test2' rel="noopener noreferrer" target="_blank">FrontEnd React360 Repo</a>   </p>
            </div>
          </div>

        </div>
      
      </div>

  );
}

export default Work;