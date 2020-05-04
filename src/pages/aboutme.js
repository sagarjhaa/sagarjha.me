import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="About me" />

    <h1>About me</h1>
    <section>
      <p>Welcome to About me</p>
      <Link to="/">Go back to the homepage</Link>
    </section>
  </Layout>
)

export default AboutMe
