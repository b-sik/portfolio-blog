const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const crypto = require("crypto")
const axios = require("axios")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blog-post.js`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: ASC }
          limit: 1000
        ) {
          nodes {
            id
            fields {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your blog posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allMarkdownRemark.nodes

  // Create blog posts pages
  // But only if there's at least one markdown file found at "content/blog" (defined in gatsby-config.js)
  // `context` is available in the template as a prop and as a variable in GraphQL

  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].id
      const nextPostId = index === posts.length - 1 ? null : posts[index + 1].id

      createPage({
        path: `/blog${post.fields.slug}`,
        component: blogPost,
        context: {
          id: post.id,
          previousPostId,
          nextPostId,
        },
      })
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}

exports.onCreateDevServer = ({ app }) => {
  app.use(function (req, res, next) {
    res.header(`Access-Control-Allow-Origin`, `http://68.183.113.10:3000`)
    res.header(`Access-Control-Allow-Credentials`, true)
    res.header(
      `Access-Control-Allow-Headers`,
      `Origin, X-Requested-With, Content-Type, Accept`
    )
    next()
  })

  app.get("*", async function (req, res, next) {
    try {
      const response = await axios.post(
        "http://68.183.113.10:3000/visitor-log",
        {
          uid: crypto.randomBytes(16).toString("hex"),
          ip_addr: req.ip,
          timestamp: new Date(),
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
        }
      )

      console.log(response.data)
      next()
    } catch (error) {
      next(error)
    }
  })
}
