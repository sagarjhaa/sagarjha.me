import React from "react"
import { FaRegFilePdf, FaLinkedinIn, FaTwitter, FaGithub } from "react-icons/fa"
import { withPrefix } from "gatsby"

// import Constants from "../globals/constants"
import Layout from "../components/layout"
// import SEO from "../components/seo"

import "./contact.scss"

export default () => (
  <Layout centered title="Contact">
    {/* <SEO
      title="Contact"
      keywords={[...Constants.tags, "contact", "linkedin", "twitter", "email"]}
    /> */}
    <div className="contact">
      <a
        className="contact__email"
        href="mailto:sagar.jhaa@gmail.com"
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        sagar.jhaa@gmail.com
      </a>
      <div className="contact__buttons">
        <a
          className="link-button ghost"
          href="https://www.linkedin.com/in/sagarjhaa/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FaLinkedinIn /> Linkedin
        </a>
        <a
          className="link-button ghost"
          href="https://twitter.com/sagarjha/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FaTwitter /> Twitter
        </a>
        <a
          className="link-button ghost"
          href="https://github.com/sagarjhaa/"
          target="_blank"
          rel="nofollow noopener noreferrer"
        >
          <FaGithub /> Github
        </a>
      </div>
      <a
        className="link-button primary"
        href={withPrefix("/resume.pdf")}
        target="_blank"
        rel="nofollow noopener noreferrer"
      >
        <FaRegFilePdf />
        Resume
      </a>
    </div>
  </Layout>
)
