import React, { Component } from "react";

import { Link, animateScroll as scroll } from "react-scroll";

class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      burgerActive: false
    };

   
  }

  clickHamburger = () => {
    if (this.state.burgerActive === false)
      this.setState({ burgerActive: true });
    else this.setState({ burgerActive: false });
  };

  componentDidMount() {
    this.setState({ burgerActive: false });
  }

  componentDidUpdate() {
    console.log(this.state.burgerActive);
  }
  render() {
    return (
      <div>
        <nav>
          <div className={ this.state.burgerActive ? "mobile-bar" : "nav-bar" }>
          <div
              className={
                this.state.burgerActive ? "hamburger is-active" : "hamburger"
              }
              onClick={this.clickHamburger}
            >
              <span className="line" />
              <span className="line" />
              <span className="line" />
            </div>
            

            <ul>
              <Link
                className="nav-link"
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}
              >
                Home
              </Link>

              <Link
                className="nav-link"
                activeClass="active"
                to="work"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Work
              </Link>

              <Link
                className="nav-link"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                About
              </Link>

              <Link
                className="nav-link"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contact
              </Link>
            </ul>

            
          </div>
        </nav>
      </div>
    );
  }
}

export default Nav;
