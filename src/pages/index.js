import * as React from "react"
import { Link, graphql } from "gatsby"

import Seo from "../components/seo"
import Header from "../components/header"

import Hero from "./sections/hero"
import Work from "./sections/work"
import Contact from "./sections/contact"

const Index = ({ data }) => {
  const siteTitle =
    data.site.siteMetadata?.title || `Brian Siklinski - Web Developer`

  const navHeight = "50px"

  return (
    <div className="global-wrapper" data-is-root-path={true}>
      <Seo />
      <Header navHeight={navHeight} />
      <Hero navHeight={navHeight} />
      <Work />
      <Contact />
    </div>
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
