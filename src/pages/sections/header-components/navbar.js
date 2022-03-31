import React from "react"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

const NavBar = ({ navHeight }) => {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      className="border-bottom border-secondary"
      style={{ height: navHeight }}
    >
      <Container>
        <Nav className="d-flex justify-content-between align-items-center my-3 w-100">
          <Navbar.Brand
            className="d-flex align-items-center"
            style={{ cursor: "default" }}
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              size="lg"
              className="me-3 text-danger"
            />
            <h4 className="m-0 text-light">b.sik</h4>
          </Navbar.Brand>
          <div className="d-flex">
            <Nav.Item>
              <Nav.Link href="#work" className="text-light">
                work
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact" className="text-light">
                contact
              </Nav.Link>
            </Nav.Item>
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
