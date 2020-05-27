import React from "react"
import Background from "./Background"
import styles from "../../css/banner.module.css"
import icons from "../../constants/SocialLinks"

const HomeBanner = () => {
  return (
    <Background>
      <div className={styles.banner}>
        <h1>
          Petrea Silviu
          <br />
          FrontEnd
          <br />
          Developer
        </h1>
        <div className={styles.icons}>
          {icons.map(item => {
            return (
              <a key={item.id} href={item.url} className={styles.icon}>
                {item.image}
              </a>
            )
          })}
        </div>
      </div>
    </Background>
  )
}

export default HomeBanner
