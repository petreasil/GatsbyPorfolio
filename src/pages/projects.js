import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Projects from "../components/Home/Projects"
import SEO from "../components/seo"

const projects = ({ data }) => {
  const {
    allContentfulProjects: { nodes },
  } = data
  return (
    <Layout>
      <SEO title="Projects" />
      <Projects title="all projects" nodes={nodes} page />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProjects {
      nodes {
        title
        url
        id
        info {
          info
        }
        technology
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
        github
      }
    }
  }
`

export default projects
