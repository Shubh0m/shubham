import React from "react"
import { Link } from "gatsby"
import HeaderLogo from "../img/logo/anaglyph-Artboard 1-256.png"

const Layout = (props) => {
  const { title, children } = props
  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" class="site-head-left">
            <ul className="nav" role="menu">
              <li className="nav-home nav-current" role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className="nav-about" role="menuitem">
                <Link to={`/contact`}>Contact Me</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              <img src={HeaderLogo} />
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <a
                href="https://github.com/Daspy11/Daspy11.github.io"
                title="Source Code on Github"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: 32 }}
              >
                👨🏽‍💻
              </a>
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
    </div>
  )
}

export default Layout
