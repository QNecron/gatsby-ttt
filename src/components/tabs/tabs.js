import React from "react"
import PropTypes from "prop-types"

const Tabs = ({ ...props }) => {

  return(

    <div className="tabs-container" tabs-type={props.tabs}>
      {props.data.map((info, index) =>
        <button
          className="tab"
          tab-active={props.state === info ? '' : null}
          key={index}
          onClick={() => props.click(info)}
        >
          {info}
        </button>
      )}
    </div>

  )

}

Tabs.propTypes = {
  tabs: PropTypes.string,
  data: PropTypes.array,
  click: PropTypes.func
}

Tabs.defaultProps = {
  type: ``,
  data: [],
  click: () => {}
}

export default Tabs
