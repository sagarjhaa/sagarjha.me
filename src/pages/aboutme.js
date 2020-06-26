import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutMe = () => (
  <Layout>
    <SEO title="About me" />

    <h1>About me</h1>
    <section style={{ fontSize: '1.5em' }}>
      <div className='hand'>
        <span style={{ fontSize: '5rem', paddingRight: '0.3em' }}>👋</span>
      </div>
      Hi I am Sagar.
      I am from <a href='https://en.wikipedia.org/wiki/Gujarat' target='_blank'>Gujarat, India.</a>

      <ul>
        <li>Like to read about financial literacy</li>
        <li>Problem solving</li>
        <li>IOT</li>
        <li>Reason to create the site</li>
        <li>Reason to write blogs</li>
        <li></li>
        <li></li>
      </ul>

      <h3> Philosophy</h3>
      In todays connected world, I have learned a lot from opensource projects and in general from people who are willing to share
      what a certain concepts means to them and everybody has a way to represent the concept that appeal to people who can understand

      <br />
      <br />
      <br />
      <Link to="/">Go back to the homepage</Link>

    </section>
  </Layout>
)

export default AboutMe
