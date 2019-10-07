import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import './index.scss';

const IndexPage = () => (
  <Layout centered>
    <SEO title="Home" keywords={[`karlo delalic`, `portfolio`, `fullstack developer`, `software engineer`, `react`]} />
    <div style={{ maxWidth: `175px`, margin: `0 auto 1.45rem auto` }}>
      <Image />
    </div>
    <h1 style={{color: `#363636`}}>Sagar Jha</h1>
    <h2 style={{marginTop: `5px`}}>Fullstack Software Engineer</h2>
    <p style={{marginTop: `25px`}}>Learning about Gatsby and also gatsby-source-filesystem</p>
  </Layout>
)

export default IndexPage
