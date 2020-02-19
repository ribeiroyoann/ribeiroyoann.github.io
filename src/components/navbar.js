import React from "react"
// import { Link } from "gatsby"
import styles from "./navbar.module.css"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../utils/fontawesome"
import GitHub from "../../assets/icons/github.svg"
import Mail from "../../assets/icons/mail.svg"
import LinkedIn from "../../assets/icons/linkedin.svg"

const NavLink = props => (
  <a href={props.to}>
    <img alt={props.alt} src={props.src} width="150" height="70" />
  </a>
)

export default () => (
  <div className={styles.navbar}>
    <NavLink to="https://www.github.com/ribeiroyoann" src={GitHub} />
    <NavLink to="https://www.github.com/" src={LinkedIn} />
    <NavLink to="mailto:ribeiroyoannn@gmail.com" src={Mail} />
  </div>
)
