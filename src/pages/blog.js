import * as React from "react"
import { Link, graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import NavBar from "../components/navbar"
import Seo from "../components/seo"
import IconList from "../components/iconList"
import BlogMobileFooter from "../components/blogMobileFooter"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  const { navHeight } = data.site.siteMetadata?.siteConfig

  if (posts.length === 0) {
    return (
      <div location={location} title={siteTitle}>
        <Seo title="All posts" />
        <p>
          No blog posts found. Add markdown posts to "content/blog" (or the
          directory you specified for the "gatsby-source-filesystem" plugin in
          gatsby-config.js).
        </p>
      </div>
    )
  }

  return (
    <div className="global-wrapper-blog bg-darker text-light" title={siteTitle}>
      <NavBar navHeight={navHeight} location={location} />
      <Seo title="All posts" />
      <Container className="py-4 position-relative">
        <Row>
          <Col xs={12} md={10}>
            <ol>
              {posts.map(post => {
                const title = post.frontmatter.title || post.fields.slug

                return (
                  <li key={post.fields.slug} className="my-5 li-blog">
                    <article
                      itemScope
                      itemType="http://schema.org/Article"
                    >
                      <header>
                        <h2>
                          <Link to={`/blog${post.fields.slug}`} itemProp="url">
                            <span itemProp="headline">{title}</span>
                          </Link>
                        </h2>
                        <small className="text-light">
                          {post.frontmatter.date}
                        </small>
                      </header>
                      <section>
                        <p
                          dangerouslySetInnerHTML={{
                            __html:
                              post.frontmatter.description || post.excerpt,
                          }}
                          itemProp="description"
                          className="text-light"
                        />
                      </section>
                    </article>
                  </li>
                )
              })}
            </ol>
          </Col>
        </Row>
        <IconList type="fixed" size="2xl" />
      </Container>
      <BlogMobileFooter />
    </div>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteConfig {
          navHeight
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
