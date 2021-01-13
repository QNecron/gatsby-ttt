import React from "react"
import PropTypes from "prop-types"

const Wrapper = ({ children, wrapper }) => {

  return(

    <div className="wrapper" wrapper-type={wrapper}>
      {children}
    </div>

  )

}

Wrapper.propTypes = {
  type: PropTypes.string,
}

Wrapper.defaultProps = {
  type: ``,
}

export default Wrapper
