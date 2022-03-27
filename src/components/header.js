import React from "react"
import { Navbar } from "react-bootstrap"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"

const Header = ({ navHeight }) => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="border-bottom border-secondary" style={{ height: navHeight }}>
        <Container>
          <Nav className="justify-content-end my-3 w-100">
            <Nav.Item>
              <Nav.Link href="#work">work</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">contact</Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default Header
