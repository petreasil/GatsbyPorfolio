import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import HomeBanner from "../components/Home/HomeBanner"
import Projects from "../components/Home/Projects"
import SEO from "../components/seo"
const IndexPage = ({ data }) => {
  const {
    allContentfulProjects: { nodes },
  } = data
  return (
    <Layout>
      <SEO title="Home"></SEO>
      <HomeBanner></HomeBanner>
      <Projects title="latest projects" nodes={nodes}></Projects>
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulProjects(sort: { fields: createdAt, order: DESC }, limit: 4) {
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

export default IndexPage
