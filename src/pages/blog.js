import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = (data) => {
  return (<Layout>
    <SEO title="Blog" />
    {data.data.allMarkdownRemark.edges.map(({ node }) =>
      <div key={node.id}>
        <h4>{node.frontmatter.title}</h4>
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
          excerpt
          timeToRead
          html
        }
      }
    }
  }
`

export default Blog
