import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleRight } from "@fortawesome/free-solid-svg-icons"

import { isBlog } from "../helpers"

const NavBar = ({ location }) => {
  const {
    site: {
      siteMetadata: {
        siteConfig: { navHeight },
      },
    },
  } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            siteConfig {
              navHeight
            }
          }
        }
      }
    `
  )

  return (
    <Navbar
      bg="dark"
      variant="dark"
      className={`border-bottom border-secondary ${isBlog(location) ? "sticky-top" : ""}`}
      style={{ height: navHeight }}
    >
      <Container>
        <Nav className="d-flex justify-content-between align-items-center my-3 w-100">
          <Nav.Link href="/">
            <Navbar.Brand className="d-flex align-items-center">
              <FontAwesomeIcon
                icon={faAngleRight}
                size="lg"
                className="me-3 text-danger"
              />
              <h4 className="m-0 text-light">b.sik</h4>
            </Navbar.Brand>
          </Nav.Link>
          <div className="d-flex">
            <Nav.Item>
              <Nav.Link href="/#work" className="text-light">
                work
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/#contact" className="text-light">
                contact
              </Nav.Link>
            </Nav.Item>
            {/* <Nav.Item>
              <Nav.Link
                href="/blog"
                className={`${isBlog(location) ? "text-danger" : "text-light"}`}
              >
                blog
              </Nav.Link>
            </Nav.Item> */}
          </div>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default NavBar
