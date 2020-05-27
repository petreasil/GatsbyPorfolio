import React from "react"
import Title from "./Title"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Blogs = props => {
  console.log(props)
  return (
    <section className="section">
      <Title title={props.title}></Title>
      <div className="section-center center">
        {props.edges.map(item => {
          const { id, title, image = "", slug, size } = item.node
          console.log(size)

          return (
            <Link key={Math.random(id)} to={`/blog/${slug}`}>
              <article className="tutorial">
                {image && <Image fluid={image.fluid} />}
                <div className="tutorial-footer">
                  <h4>{title}</h4>
                  <p>{size}</p>
                </div>
              </article>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Blogs
