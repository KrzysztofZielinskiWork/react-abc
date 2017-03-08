import React from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'
import {Link} from 'react-router'
import './App.css';

const App = (props) => (
  <div>
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <LinkContainer to="/Utils">
            <NavItem>NazwaModulu</NavItem>
          </LinkContainer>

          <LinkContainer to="/page1">
            <NavItem>Page One</NavItem>
          </LinkContainer>

          <LinkContainer to="/page2">
            <NavItem>Page Two</NavItem>
          </LinkContainer>

          <LinkContainer to="/books">
            <NavItem>Books View</NavItem>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {props.children}
  </div>
)

export default App