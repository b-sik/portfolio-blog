import React, { useState, Fragment } from "react"
import { handleKeyDown } from "../../helpers"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import Showcase from "../../components/showcase"
import workItemData from '../../data/work'

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
          key={i}
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
        <Row className="d-none d-lg-flex flex-grow-1">
          <Col xs={5} className="d-flex border-end border-secondary">
            <ul className="d-flex flex-column flex-grow-1 justify-content-around text-primary">
              {workListComponents(workList)}
            </ul>
          </Col>
          <Col
            xs={7}
            className="d-flex justify-content-center align-items-center"
          >
            <Showcase {...workItemData(workItem)} />
          </Col>
        </Row>
        <Row className='d-lg-none'>
          <Col
            xs={12}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            {workList.map((item, i) => (
              <Fragment key={i}>
                <h4 className={`text-center text-secondary ${i === 0 ? "mb-3" : "mb-3 mt-5"}`}>
                  {item}
                </h4>
                <Showcase {...workItemData(`work-item-${i}`)} />
              </Fragment>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Work
