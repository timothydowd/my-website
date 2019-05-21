import React from 'react';
import '../Nav.css';
import { Link, animateScroll as scroll } from "react-scroll";

function Nav() {

  return (
   <nav>
       {/* <h1 className='logo'>logo</h1> */}
       <ul>
        <Link
          className='nav-bar'
          activeClass="active"
          to="home"
          spy={true}
          smooth={true}
          offset={-300}
          duration= {500}
        >Home</Link>

        <Link
        className='nav-bar'
          activeClass="active"
          to="work"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
        >Work</Link>

        <Link
        className='nav-bar'
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
        >About</Link>

        <Link
        className='nav-bar'
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          offset={0}
          duration= {500}
        >Contact</Link>


           {/* <li><a href='#aaa'>Home</a></li>
           <li><a href='#aaa'>Work</a></li>
           <li><a href='#aaa'>About</a></li>
           <li><a href='#aaa'>Contact</a></li> */}
       </ul>
   </nav>
  );
}

export default Nav;