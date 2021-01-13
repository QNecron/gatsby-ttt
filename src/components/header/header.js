import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

import Logo from "../../images/logo-tabletop-tools.png"

const Header = ({ ...props }) => {

  return (

    <div className="header-container">

      <header className="header" role="banner">

        <nav className="nav-primary" role="navigation">
          <Link className="nav-primary-link" to="/">
            <span data-srt="true">{props.title}</span>
            <img className="nav-primary-logo" src={Logo} alt=" " aria-hidden="true" />
          </Link>
          <Link className="nav-primary-link" to="/character/">Chracter <br /> Creator</Link>
          <Link className="nav-primary-link" to="/spells/">Spells</Link>
          <Link className="nav-primary-link" to="/feats/">Feats</Link>
          <Link className="nav-primary-link" to="/bestiary/">Bestiary</Link>
        </nav>

      </header>

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
