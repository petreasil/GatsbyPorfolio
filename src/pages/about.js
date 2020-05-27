import React from "react"
import Layout from "../components/layout"
import styles from "../css/about.module.css"
import Title from "../components/Title"
import SEO from "../components/seo"

const about = () => {
  return (
    <Layout>
      <SEO title="About" />
      <section className={styles.about}>
        <Title title="about"></Title>
        <article className={styles.text}>
          <p>
            I am a FrontEnd Developer passionate about web dev but also
            interested in learning BackEnd. I like to explore the unlimited
            possibilities of new technologies, in order to make an unique design
            for each project. I spend a large amount of my free time learning
            different programming languages and exploring the latest technology
            /frameworks in web development world. Apart from being a web
            developer, I enjoy most of my free time being outdoors, enjoying
            fresh air and good movies.
            <a href="www.linkedin.com/in/silviu-petrea">LinkedIn</a>
          </p>
        </article>
        <article className={styles.contact}>
          <p>
            If you are looking to get ahold of me, you can send me an email at{" "}
            <a href="mailto:petrea.silviu@gmail.com">petrea.silviu@gmail.com</a>
          </p>
        </article>
      </section>
    </Layout>
  )
}

export default about
