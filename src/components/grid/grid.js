import React from "react"
import PropTypes from "prop-types"

const Grid = ({ children, desktop, tablet, mobile, gap }) => {

  return(

    <div
      className="grid-container"
      grid-desktop={desktop}
      grid-tablet={tablet}
      grid-mobile={mobile}
      grid-gap={gap}
    >
      {children}
    </div>

  )

}


Grid.propTypes = {
  desktop: PropTypes.string,
  tablet: PropTypes.string,
  mobile: PropTypes.string,
  gap: PropTypes.string,
}

Grid.defaultProps = {
  desktop: ``,
  tablet: ``,
  mobile: ``,
  gap: ``,
}

export default Grid
