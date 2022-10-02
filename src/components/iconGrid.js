import React from "react"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import contactIcons from "../data/contact-icons"

const IconGrid = () => {
  const icons = contactIcons("6x");

  return (
      <Col xs={12} lg={{ span: 5, offset: 1 }} className="d-flex mb-5 mb-lg-0">
        <Container className="flex-grow-1 d-flex flex-column justify-content-center">
          <Row>
            {Object.values(icons).map((data, i) => {
              const { label, icon, url, color, border } = data

              return (
                <Col
                  xs={6}
                  className={`border-${border[0]} border-${border[1]} p-0`}
                  key={i}
                >
                  <div className={`text-center text-${color} d-flex`}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopenner noreferrer"
                      className="contact-grid-item p-4 flex-grow-1"
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      {icon}
                      <p>{label}</p>
                    </a>
                  </div>
                </Col>
              )
            })}
          </Row>
        </Container>
      </Col>
  )
}

export default IconGrid
