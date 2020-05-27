import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Blogs from "../components/Blogs"

const BlogPage = ({ data }) => {
  const {
    allContentfulBlogpost: { edges },
  } = data
  console.log(edges)
  return (
    <Layout>
      <SEO title="Tutorials" />
      <Blogs edges={edges} title="Latest Posts" />
    </Layout>
  )
}

export const query = graphql`
  {
    allContentfulBlogpost {
      edges {
        node {
          title
          size
          slug
          date
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
          content {
            childContentfulRichText {
              html
            }
          }
        }
      }
    }
  }
`

export default BlogPage
