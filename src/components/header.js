import React, { useState } from "react"
import { graphql, Link, StaticQuery } from "gatsby"
import { withStyles } from "@material-ui/core/styles"
import Switch from "@material-ui/core/Switch"

// import Logo from "../assets/images/logo.svg"

// import useDarkMode from "../hooks/src/darkmode"

import "./header.scss"

const DarkSwitch = withStyles({
  switchBase: {
    color: "#6772e5",
    "&$checked": {
      color: "#6772e5",
      "&:hover": {
        backgroundColor: "rgba(255, 255, 255, 0.08)",
      },
    },
    "&$checked + $track": {
      backgroundColor: "#fff",
      opacity: 1,
    },
  },
  checked: {},
  track: {
    backgroundColor: "#252525",
    opacity: 1,
  },
})(Switch)

const Header = () => {
  const [isNavbarOpen, setNavbarOpen] = useState(false)
//   const [isDarkMode, setDarkMode] = useDarkMode("dark")

  return (
    <StaticQuery
      query={graphql`
        {
          allFile(
            filter: {
              sourceInstanceName: { eq: "pages" }
              extension: { eq: "js" }
            }
          ) {
            edges {
              node {
                name
                id
              }
            }
          }
        }
      `}
      render={data => (
        <header>
          <div className="brand">
            <Link to={"/"} aria-label="Brand Logo" className="brand__logo">
              {/* <Logo /> */}
            </Link>
            <span className="brand__name">Sagar Jha</span>
          </div>
          <div
            onClick={() => setNavbarOpen(!isNavbarOpen)}
            className={`navbar-burger${isNavbarOpen ? " open" : ""}`}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <nav
            onClick={() => setNavbarOpen(false)}
            className={`navbar${isNavbarOpen ? " open" : ""}`}
          >
            <Link to={"/"} className="navbar__item" activeClassName="active">
              Home
            </Link>
            {data.allFile.edges
              .filter(edge => {
                return edge.node.name !== "404" && edge.node.name !== "index"
              })
              .map(edge => {
                const link = `/${edge.node.name}`
                const name = edge.node.name
                return (
                  <Link
                    key={edge.node.id}
                    to={link}
                    className="navbar__item"
                    activeClassName="active"
                    partiallyActive={true}
                  >
                    {name}
                  </Link>
                )
              })}
          </nav>
          <DarkSwitch
            className="dark-switch"
            // checked={isDarkMode}
            // onChange={() => setDarkMode(!isDarkMode)}
            value="darkMode"
            inputProps={{ "aria-label": "dark mode switch" }}
          />
        </header>
      )}
    />
  )
}

export default Header
