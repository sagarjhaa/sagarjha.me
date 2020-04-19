import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="About me" />
    <h1>Hi from the About me page</h1>
    <p>Welcome to About me</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutMe
