import React from "react"
import Layout from "../components/layout"
import { graphql, Link } from "gatsby"
import { IoIosArrowRoundBack } from 'react-icons/io';

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <Link to='/blog'>
        <IoIosArrowRoundBack /> back to posts
      </Link>
      <h1 className='blog__post__title__link'>{post.frontmatter.title}</h1>
      <div className='blog__post__content' dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`