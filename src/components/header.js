import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Navbar, Nav } from "react-bootstrap"

const Header = ({selected}) => {
  return (
    <header >
      <Navbar expand="lg" >
        <Navbar.Brand>
            <Link to='/' className={selected === 0?'nav-bar selected':'nav-bar'}>Paul Ashraf</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav>
            <Nav.Item><Link to='/projects' className={selected === 2?'nav-bar selected':'nav-bar'}>Projects</Link></Nav.Item>
            <Nav.Item><Link to='/experience' className={selected === 1?'nav-bar selected':'nav-bar'}>Experience</Link></Nav.Item>
            <Nav.Item><Link to='/education' className={selected === 3?'nav-bar selected':'nav-bar'}>Education</Link></Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

Header.defaultProps = {
  selected: 0
}

Header.propTypes = {
  selected: PropTypes.number,
}


export default Header
