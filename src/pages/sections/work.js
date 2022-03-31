import React, { useState } from "react"
import { handleKeyDown } from "../../helpers"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import OtherShowcase from "./work-components/OtherShowcase"
import PluginShowcase from "./work-components/PluginShowcase"
import ThemeShowcase from "./work-components/ThemeShowcase"

const Work = () => {
  const [workItem, setWorkItems] = useState("work-item-0")

  const workList = [
    "custom WordPress themes",
    "custom WordPress plugins",
    "other work",
  ]

  const workListComponents = workList => {
    return workList.map((item, i) => {
      return (
        <li
          // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
          role="button"
          id={`work-item-${i}`}
          tabIndex={0}
          className={`h4 ${
            workItem === `work-item-${i}` ? "selected-work-item" : ""
          }`}
          onClick={e => setWorkItems(e.target.id)}
          onKeyDown={e => handleKeyDown(e, setWorkItems, e.target.id)}
        >
          {item}
        </li>
      )
    })
  }

  const workShowcaseComponent = workItem => {
    switch (workItem) {
      case "work-item-0":
        return <ThemeShowcase />
      case "work-item-1":
        return <PluginShowcase />
      case "work-item-2":
        return <OtherShowcase />
      default:
        break
    }
  }

  return (
    <section
      id="work"
      className="d-flex flex-column w-100 min-vh-100 pb-5 bg-dark text-danger"
    >
      <Container>
        <Row>
          <Col xs={12}>
            <h2 className="my-5 text-end">work</h2>
          </Col>
        </Row>
      </Container>
      <Container
        className="d-flex flex-column flex-grow-1 mb-5"
        style={{ minHeight: "500px" }}
      >
        <Row className="flex-grow-1">
          <Col xs={5} className="d-flex border-end border-secondary">
            <ul className="d-flex flex-column flex-grow-1 justify-content-around text-primary">
              {workListComponents(workList)}
            </ul>
          </Col>
          <Col
            xs={7}
            className="d-flex justify-content-center align-items-center"
          >
            {workShowcaseComponent(workItem)}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Work
