import React from "react"
import PropTypes from "prop-types"

import { Link } from "gatsby"

const Card = ({ type, desktop, mobile, title, copy, cta, link, external }) => {

  return(

    <div className="card" card-type={type}>

      {(desktop && mobile) &&
        <picture className="card-asset-container">
          <source srcSet={mobile} media="(max-width: 767px)" />
          <img className="card-asset" src={desktop} alt=" " aria-hidden="true" />
        </picture>
      }

      {(title || copy || cta) &&
        <div className="card-content-container">
          {title ? <h2 className="card-title">{title}</h2> : ''}
          {copy ? <p className="card-copy">{copy}</p> : ''}
          {link && external === true && (
            <a className="card-cta btn btn-primary btn-small" href={link} rel="noreferrer" target="_blank">{cta}</a>
          )}
          {link && external === false && (
            <Link className="card-cta btn btn-primary btn-small" to={link}>{cta}</Link>
          )}
        </div>
      }

    </div>

  )

}

Card.propTypes = {
  type: PropTypes.string,
  desktop: PropTypes.string,
  mobile: PropTypes.string,
  title: PropTypes.string,
  copy: PropTypes.string,
  cta: PropTypes.string,
  link: PropTypes.string,
  external: PropTypes.bool
}

Card.defaultProps = {
  type: "default",
  desktop: ``,
  mobile: ``,
  title: ``,
  copy: ``,
  cta: ``,
  link: ``,
  external: false
}

export default Card
