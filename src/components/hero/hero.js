import React from "react"
import PropTypes from "prop-types"

import Wrapper from "../wrapper/wrapper"

import { Link } from "gatsby"

import ImgDesktop from "../../images/hero/hero-01.webp"
import ImgMobile from "../../images/hero/hero-01-mobile.webp"

const Hero = ({ size, height, width, desktop, mobile, title, copy, cta, link }) => {

  return(

    <section className="hero-container" data-hero={size}>

      <picture className="hero-asset-container">
        <source srcSet={mobile} height="479" width="767" media="(max-width: 767px)" />
        <img className="hero-asset" src={desktop} height={height} width={width} alt=" " aria-hidden="true" />
      </picture>

      <div className="hero-overlay"></div>

      {(title || copy || cta) &&
        <Wrapper wrapper="structure">
          <div className="hero-content-container">
            {title ? <h1 className="hero-title">{title}</h1> : ''}
            {copy ? <p className="hero-copy">{copy}</p> : ''}
            {link ? <Link className="hero-cta btn-hero" to={link}>{cta}</Link> : ''}
          </div>
        </Wrapper>
      }

    </section>

  )

}


Hero.propTypes = {
  size: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  desktop: PropTypes.string,
  mobile: PropTypes.string,
  title: PropTypes.string,
  copy: PropTypes.string,
  cta: PropTypes.string,
  link: PropTypes.string
}

Hero.defaultProps = {
  size: "large",
  height: ``,
  width: ``,
  desktop: ImgDesktop,
  mobile: ImgMobile,
  title: ``,
  copy: ``,
  cta: ``,
  link: ``
}

export default Hero
