import React from "react"
import Helmet from "react-helmet"
import { graphql } from 'gatsby'
import Layout from "../components/layout"

const ContactPage = ({
  data: {
    site
  },
}) => {
  return (
    <Layout>
      <Helmet>
        <title>About — {site.siteMetadata.title}</title>
        <meta name="description" content={"Contact page of " + site.siteMetadata.description} />
      </Helmet>
      <div className="card -about">
        <div className="post-thumbnail" style={{backgroundImage: `url('/assets/alexander-andrews-HgUDpaGPTEA-unsplash.jpg')`, marginBottom: 0}}>
          <h1 className="post-title">About Me</h1>
          <p>I design a user-centered interface and find new solutions against problems on all digital products. <br/>
Always passionate and curious about everthing new! &darr;</p>
        </div>
      </div>
      <div className="two-grids -contact -about">
        <div>
          <h3>Specialities</h3>
          <p>UX Research</p>
          <p>UI Design </p>
          <p>for all digital products(Web&App)</p>
        </div>

        <div>
          <h3>Proficient in</h3>
          <p>Design Thinking</p>
          <p>User Research</p>
          <p>Wireframing</p>
          <p>Prototyping</p>
          <p>User Test</p>
          <p>... and making Design System</p>
        </div>

        <div>
          <h3>Skilled in</h3>
          <p>Sketch </p>
          <p>XD</p>
          <p>Protopie </p>
          <p>Photoshop </p>
          <p>Illustrator </p>
          <p>Premier Pro </p>
        </div>

        <div>
          <h3>Also</h3>
          <p>HTML / SCSS / JS</p>
          <p>ReactJS / Angular</p>
          <p>Git</p>
          <p>Confluence / Jira</p>
          <p>Google Analytics </p>
        </div>

      </div>
    </Layout>
  )
}
export default ContactPage
export const pageQuery = graphql`
  query ContactPageQuery{
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`