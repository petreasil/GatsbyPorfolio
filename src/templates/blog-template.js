import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import Title from "../components/Title"

const ComponentName = ({ data }) => {
  const {
    contentfulBlogpost: { title, size, date },
  } = data
  console.log(data)
  return (
    <Layout>
      <section className="section">
        <Title title={title}></Title>
        <div className="video-container">
          <div
            dangerouslySetInnerHTML={{
              __html:
                data.contentfulBlogpost.content.childContentfulRichText.html,
            }}
          />

          <div className="links-container">
            <h5>{date}</h5>
            <h5>{size}</h5>
            <h5>{title}</h5>
          </div>
        </div>

        <Link to="/blog" className="btn center-btn">
          Blog
        </Link>
      </section>
    </Layout>
  )
}

export const query = graphql`
  query GetSingleProduct($slug: String) {
    contentfulBlogpost(slug: { eq: $slug }) {
      id
      title
      size
      date(fromNow: true)
      content {
        childContentfulRichText {
          html
        }
      }
    }
  }
`

export default ComponentName
