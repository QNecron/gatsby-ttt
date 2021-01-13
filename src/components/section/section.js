import React from "react"
import PropTypes from "prop-types"

const Section = ({ children, type }) => {

  return(

    <section className="section" section-type={type}>
      {children}
    </section>

  )

}

Section.propTypes = {
  type: PropTypes.string,
}

Section.defaultProps = {
  type: ``,
}


export default Section
