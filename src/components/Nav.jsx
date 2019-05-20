import React from 'react';




import '../Nav.css';

function Nav() {

  return (
   <nav>
       <h1 className='logo'>logo</h1>
       <ul>
           <li><a href='#aaa'>Home</a></li>
           <li><a href='#aaa'>Work</a></li>
           <li><a href='#aaa'>About</a></li>
           <li><a href='#aaa'>Contact</a></li>
       </ul>
   </nav>
  );
}

export default Nav;