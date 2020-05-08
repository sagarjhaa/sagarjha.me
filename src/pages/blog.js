import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Blog = (data) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <h1>Blog</h1>
      <section className='blog'>
        {data.data.allMarkdownRemark.edges.map(({ node }) =>
          <div key={node.id} className='blog__post'>
            <h2 className='blog__post__title'><Link className='blog__post__title__link' to={node.fields.slug}>{node.frontmatter.title}</Link></h2>
            <p className='blog__post__excerpt'>{node.excerpt}</p>
            <p className='blog__post__info'><span>{node.frontmatter.date}</span> <span>({node.timeToRead} minutes)</span></p>
          </div>
        )}
      </section>
    </Layout >
  )
}

export const query = graphql`
{
  allMarkdownRemark(filter: {frontmatter: {disabled: {ne: true}}}, sort: {order: DESC, fields: frontmatter___date}) {
    edges {
      node {
        id
        frontmatter {
          title
          date(formatString: "MMMM D, YYYY")
          disabled
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
