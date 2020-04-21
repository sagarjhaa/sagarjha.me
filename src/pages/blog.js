import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = (data) => {
  return (<Layout>
    <SEO title="Blog" />
    {data.data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id}>
        <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        <p>{node.excerpt}</p>
        <p><span>{node.frontmatter.date}</span> <span>({node.timeToRead} minutes)</span></p>
      </div>

    )}
  </Layout >)
}

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          fields {
            slug
          }
          excerpt
          timeToRead
        }
      }
    }
  }
`

export default Blog
