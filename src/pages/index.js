import * as React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const Index = ({ data, location }) => {
  const siteTitle =
    data.site.siteMetadata?.title || `Brian Siklinski - Web Developer`

  return (
    <Layout location={location} title={siteTitle}>
      <Seo />
      <Container>
        <Row>
          <Col xs={6}>
            <p>
              No blog posts found. Add markdown posts to "content/blog" (or the
              directory you specified for the "gatsby-source-filesystem" plugin
              in gatsby-config.js).
            </p>
            <Button variant="info">Button!</Button>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    # allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
    #   nodes {
    #     excerpt
    #     fields {
    #       slug
    #     }
    #     frontmatter {
    #       date(formatString: "MMMM DD, YYYY")
    #       title
    #       description
    #     }
    #   }
    # }
  }
`
