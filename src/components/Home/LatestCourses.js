import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Course from "../Courses/Course"
import styles from "../../css/courses.module.css"
import Title from "../Title"
const query = graphql`
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

const Courses = () => {
  const {
    allContentfulCourses: { nodes: courses },
  } = useStaticQuery(query)

  return (
    <section className={styles.courses}>
      <Title title="latest courses"></Title>
      <div className="center">
        {courses.map(item => {
          return <Course key={item.id} {...item}></Course>
        })}
      </div>
      <div className="center-div">
        <Link to="/courses" className="btn">
          all courses
        </Link>
      </div>
    </section>
  )
}

export default Courses
