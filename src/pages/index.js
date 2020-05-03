import React from "react"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { FaPencilAlt, FaProjectDiagram } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";



const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className='intro'>
      <Image className='main-image' />
      <h1 className='full-name'>Sagar Jha</h1>
      <h3 className='position'>Full Stack Engineer</h3>
      <p className='tag-line'>Love to do experiments with technology and <br />passonate about finance knowledge</p>
      <div className='button-container'>
        <a className='link-button' href='/blog'>
          <span className='link-button-symbol'>
            <FaPencilAlt />
            Writings
          </span>
        </a>
        <a className='link-button' href='/projects'>
          <span className='link-button-symbol'>
            <FaProjectDiagram />
            Projects
          </span>
        </a>
        <a className='link-button' target='_blank' rel="noopener noreferrer" href='https://github.com/sagarjhaa'>
          <span className='link-button-symbol'>
            <AiOutlineGithub />
          Github
          </span>
        </a>
        <a className='link-button' target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/sagarjhaa/'>
          <span className='link-button-symbol'>
            <FaLinkedinIn />
          Linkedin
          </span>
        </a>
      </div>
    </section>
  </Layout>
)

export default IndexPage
