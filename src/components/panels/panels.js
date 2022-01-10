import React from "react"
// import PropTypes from "prop-types"

const Panels = ({ ...props }) => {

  return(

    <>

    {props.children}

    </>

  )

}

// Panels.propTypes = {
//   tabs: PropTypes.string,
//   data: PropTypes.array,
//   click: PropTypes.func
// }
//
// Panels.defaultProps = {
//   type: ``,
//   data: [],
//   click: () => {}
// }

export default Panels
