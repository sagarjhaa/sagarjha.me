import React from "react"
import { graphql, Link } from "gatsby"

// import Constants from "../globals/constants"
import Layout from "../components/layout"
// import SEO from "../components/seo"

import "./blog.scss"

export default ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout title="Blog">
    {/* <SEO title="Blog" keywords={[...Constants.tags, `blog`]} /> */}
    <div className="blog">
      {edges.map(edge => {
        console.log(edge);
        return (
          <div className="blog__post" key={edge.node.id}>
            <h2 className="blog__post__title">
              <Link
                className="blog__post__title__link"
                to={edge.node.fields.slug}
              >
                {edge.node.frontmatter.title}
              </Link>
            </h2>
            <p className="blog__post__excerpt">{edge.node.excerpt}</p>
            <h5 className="blog__post__info">
              {edge.node.frontmatter.date}
              <span className="dot-divider"></span>
              {edge.node.timeToRead} min read
            </h5>
          </div>
        )
      })}
    </div>
  </Layout>
)

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { type: { eq: "blog" } } }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 300)
          frontmatter {
            date(formatString: "MMMM D, YYYY")
            title
          }
          fields {
            slug
          }
          timeToRead
        }
      }
    }
  }
`
