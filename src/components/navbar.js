import React from "react"
import "../styles/navbar.module.css"

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>Résumé</li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
