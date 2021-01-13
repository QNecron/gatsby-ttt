import React from "react"
import PropTypes from "prop-types"

const Grid = ({ children, desktop, tablet, mobile }) => {

  return(

    <div
      className="grid-container"
      grid-desktop={desktop}
      grid-tablet={tablet}
      grid-mobile={mobile}
    >
      {children}
    </div>

  )

}


Grid.propTypes = {
  desktop: PropTypes.string,
  tablet: PropTypes.string,
  mobile: PropTypes.string,
}

Grid.defaultProps = {
  desktop: ``,
  tablet: ``,
  mobile: ``,
}

export default Grid
