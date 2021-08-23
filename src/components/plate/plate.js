import React from "react"
import PropTypes from "prop-types"

const Plate = ({ title, number1, number2, type }) => {

  return(

    <div className="plate" data-plate={type} aria-live="polite">
      {title ? <h2 className="heading-4 plate-title">{title}</h2> : ''}
      {number1 ? <div className="heading-4 plate-number1">{number1}</div> : ''}
      {number2 ? <div className="heading-4 plate-number2">{number2}</div> : ''}
    </div>

  )

}


Plate.propTypes = {
  title: PropTypes.string,
  number1: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  number2: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.string,
}

Plate.defaultProps = {
  title: ``,
  number1: ``,
  number2: ``,
  type: ``,
}

export default Plate
