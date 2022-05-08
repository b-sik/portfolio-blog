import React from "react"

import Container from "react-bootstrap/Container"

import IconList from "./iconList"

const BlogMobileFooter = () => {

  return (
    <footer
      className="d-flex d-md-none justify-content-center align-items-center border-top border-secondary bg-dark py-3"
    >
      <Container className="d-flex justify-content-center align-items-center mx-4">
        <IconList type="footer" size="3x" />
      </Container>
    </footer>
  )
}

export default BlogMobileFooter
