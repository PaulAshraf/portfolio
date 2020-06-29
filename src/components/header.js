import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import { Navbar, Nav } from "react-bootstrap"

const Header = ({selected}) => {
  return (
    <header >
      <Navbar expand="lg" >
        <Navbar.Brand>
            {selected === 0?
            <Link to='/' className='nav-bar selected'>Paul Ashraf</Link>
            :
            <Link to='/' className='nav-bar'>Paul Ashraf</Link>
            }
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" >
          <Nav>
            {selected === 1?
            <Nav.Link><Link to='/experience' className='nav-bar selected'>Experience</Link></Nav.Link>
            :
            <Nav.Link><Link to='/experience' className='nav-bar'>Experience</Link></Nav.Link>
            }
            {selected === 2?
            <Nav.Link><Link to='/projects' className='nav-bar selected'>Projects</Link></Nav.Link>
            :
            <Nav.Link><Link to='/projects' className='nav-bar'>Projects</Link></Nav.Link>
            }
            {selected === 3?
            <Nav.Link><Link to='/education' className='nav-bar selected'>Education</Link></Nav.Link>
            :
            <Nav.Link><Link to='/education' className='nav-bar'>Education</Link></Nav.Link>
            }
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
