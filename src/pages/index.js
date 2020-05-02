import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { FaPencilAlt, FaProjectDiagram } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="main">
      <Image className='main-image' />
      <h1 className='full-name'>Sagar Jha</h1>
      <h3 className='position'>Full Stack Engineer</h3>

      <p className='tag-line'>Love to do experiments with technology and <br />passonate about finance knowledge</p>

      <div className='button-container'>
        <a className='link-button' href='/blog'>
          <FaPencilAlt />
          Writings
        </a>
        <a className='link-button'>
          <FaProjectDiagram />
          Projects
        </a>
        <a className='link-button' target='_blank' href='https://github.com/sagarjhaa'>
          <AiOutlineGithub />
          Github
        </a>
        <a className='link-button' target='_blank' href='https://www.linkedin.com/in/sagarjhaa/'>
          <FaLinkedinIn />
          Linkedin
        </a>
      </div>

    </section>
  </Layout>
)

export default IndexPage
