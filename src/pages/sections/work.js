import React, { useState, Fragment } from "react"
import { handleKeyDown } from "../../helpers"
import { BrowserView, MobileView } from "react-device-detect"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import Showcase from "./work-components/showcase"

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

  const workItemData = workItem => {
    switch (workItem) {
      case "work-item-0":
        return {
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          items: {
            breathtobody: {
              name: "Breath To Body",
              description:
                "Rehabbed a bloated WordPress site with a custom theme and easy-to-update Content Management System.",
              buttons: [["visit site", "http://breathtobody.com"]],
            },
            westferry: {
              name: "West Ferry",
              description:
                "Created a central hub for this band to show-off their work, run a blog, and archive their shows and albums.",
              buttons: [["visit site", "https://westferrymusic.com"]],
            },
          },
        }
      case "work-item-1":
        return {
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          items: {
            dynamiccontent: {
              name: "Dynamic Content",
              description:
                "A plugin for the WordPress editor which allows core blocks to become dynamic, updating automatically on the frontend if a database change is detected.",
              buttons: [
                [
                  "wordpress",
                  "http://breathtobody.comhttps://wordpress.org/plugins/dynamic-block-content/",
                ],
                ["github", "https://github.com/bszyk/dynamic-block-content"],
              ],
            },
            advacc: {
              name: "Advanced Access for LearnDash",
              description:
                "A plugin for LearnDash which adds functionality to control access to courses, including creating a digital WooCommerce access pass.",
              buttons: [["github", "http://github.com/bszyk/adv-acc-ld-wc"]],
            },
            sso: {
              name: "Custom SSO for WordPress",
              description:
                "A custom SSO for WordPress utilizing JWT Auth tokens.",
              buttons: [["github", "https://wordpress.org/plugins/bszyk-sso"]],
            },
          },
        }
      case "work-item-2":
        return {
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          items: {
            dynamiccontent: {
              name: "Take Your Meds Bot",
              description:
                "ADHD-inspired Twitter bot powered by AWS Lambda functions and written with Python.",
              buttons: [
                ["twitter", "https://twitter.com/takeyourmedsbot"],
                ["github", "https://github.com/bszyk/twitter-bots"],
              ],
            },
            advacc: {
              name: "Zip WP",
              description:
                "Bash script deliveredvia Composer package to prepare a zip archive for a WordPress plugin.",
              buttons: [["github", "http://github.com/bszyk/bszyk-zip-wp"]],
            },
            sso: {
              name: "This Website",
              description:
                "Fully static custom site made with Gatsby, React, and Bootstrap.",
              buttons: [["github", "https://github.com/bszyk/portfolio-blog"]],
            },
          },
        }
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
          <BrowserView>
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
          </BrowserView>
          <MobileView>
            <Col
              xs={12}
              className="d-flex flex-column justify-content-center align-items-center"
            >
              {workList.map((item, i) => (
                <Fragment key={i}>
                  <h4
                    className={`text-center ${i === 0 ? "mb-3" : "mb-3 mt-5"}`}
                  >
                    {item}
                  </h4>
                  <Showcase {...workItemData(`work-item-${i}`)} />
                </Fragment>
              ))}
            </Col>
          </MobileView>
        </Row>
      </Container>
    </section>
  )
}

export default Work
