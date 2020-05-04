import React from "react"
import { Link } from "gatsby"

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <ul>
          <li>
            <Link to="/">Sagar Jha</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <Link to="/aboutme/">about me</Link>
          </li>
          <li>
            <Link to="/blog/">blog</Link>
          </li>
          <li>
            <Link to="/projects/">projects</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
