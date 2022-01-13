import React from "react"
import PropTypes from "prop-types"

const Footer = ({ title }) => {

  return(

    <div className="footer-container">

      <footer className="footer" role="contentinfo">
        {new Date().getFullYear()} {title}
      </footer>

    </div>

  )

}

Footer.propTypes = {
  title: PropTypes.string,
}

Footer.defaultProps = {
  title: ``,
}

export default Footer
