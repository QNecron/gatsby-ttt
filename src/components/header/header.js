import React, { useState } from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import Wrapper from "../../components/wrapper/wrapper"
import Flyout from "../../components/flyout/flyout"

import Logo from "../../images/logo-tabletop-tools.png"

const Header = ({ ...props }) => {

  const [flyout, flyoutUpdate] = useState("false")

  return (

    <div className="header-container">

      <header className="header" role="banner">

        <Wrapper wrapper="structure">

          <button
            className="header-menu"
            aria-haspopup="true"
            aria-controls="nav-primary-container"
            onClick={(e) => flyoutUpdate("true")}
          >
            <span className="material-icons" aria-hidden="true">menu</span> Menu
          </button>

          <Link className="header-logo" to="/">
            <span data-srt="true">{props.title}</span>
            <img className="logo" src={Logo} alt=" " aria-hidden="true" />
          </Link>

        </Wrapper>

      </header>

      <Flyout
        flyoutId="nav-primary-container"
        flyoutType={"left"}
        flyoutOpen={flyout}
        flyout={flyout}
        flyoutUpdate={flyoutUpdate}
      >

        <nav className="nav-primary" role="navigation">
          <Link className="nav-primary-link" to="/">Home</Link>
          <Link className="nav-primary-link" to="/creator/">Creator</Link>
          <Link className="nav-primary-link" to="/spells/">Spells</Link>
          <Link className="nav-primary-link" to="/feats/">Feats</Link>
          <Link className="nav-primary-link" to="/bestiary/">Bestiary</Link>
          <Link className="nav-primary-link" to="/initiative/">Initiative</Link>
          { /* <Link className="nav-primary-link" to="/combat/">Combat</Link> */ }
        </nav>

      </Flyout>

    </div>

  )

}

Header.propTypes = {
  title: PropTypes.string,
}

Header.defaultProps = {
  title: ``,
}

export default Header
