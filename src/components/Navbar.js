import React from "react"
import { Link } from "gatsby"
import logo from "../images/logoMenu.svg"
import styles from "../css/navbar.module.css"
import links from "../constants/Links"
import icons from "../constants/SocialLinks"
import { FaAlignRight } from "react-icons/fa"
import { AppContext } from "../context"
const Navbar = () => {
  const { size, handleOpenSidebar } = React.useContext(AppContext)

  if (size > 992) {
    return (
      <nav className={styles.navbar}>
        <div className={styles.center}>
          <Link to="/">
            <img width="60" src={logo} alt="john smilga logo"></img>
          </Link>
          <ul className={styles.links}>
            {links.map(link => {
              return (
                <li key={link.id}>
                  <Link to={link.url} className={styles.navLink}>
                    {link.text}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className={styles.icons}>
            {icons.map(icon => {
              return (
                <a key={icon.id} href={icon.url} className={styles.navIcon}>
                  {icon.image}
                </a>
              )
            })}
          </div>
        </div>
      </nav>
    )
  } else {
    return (
      <nav className={styles.navbar}>
        <div className={styles.header}>
          <img src={logo} width="60" height="60" alt="Silviu logo"></img>
          <button
            type="button"
            className={styles.toggleBtn}
            onClick={handleOpenSidebar}
          >
            menu<FaAlignRight className={styles.toggleIcon}></FaAlignRight>
          </button>
        </div>
      </nav>
    )
  }
}

export default Navbar
