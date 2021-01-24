import React from "react"
import PropTypes from "prop-types"

const Flyout = ({ ...props }) => {

  return(

    <>

    <div
      className="flyout-overlay"
      tabIndex="-1"
      role="presentation"
      data-overlay={props.flyoutOpen}
      onClick={(e) => props.flyoutUpdate("false")}
    >
    {/* nothing but spaaaaaace */}
    </div>

    <div
      id={props.flyoutId}
      className="flyout-container"
      aria-expanded={props.flyoutOpen}
      data-flyout={props.flyoutType}
    >

      <button className="btn-icon btn-primary flyout-close" onClick={(e) => props.flyoutUpdate("false")}>
        <span data-srt="true">Close flyout</span>
        <span className="material-icons" aria-hidden="true">close</span>
      </button>

      <div className="flyout-content">
        {props.children}
      </div>

    </div>

    </>

  )

}

Flyout.propTypes = {
  flyoutId: PropTypes.string,
  flyoutType: PropTypes.string,
  flyoutOpen: PropTypes.string
}

Flyout.defaultProps = {
  flyoutId: `needs-unique-id`,
  flyoutType: `menu-left`,
  flyoutOpen: false
}

export default Flyout
