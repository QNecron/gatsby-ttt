import React from "react"
import PropTypes from "prop-types"

const Select = ({
  children,
  inputId,
  inputValue,
  inputDisabled,
  inputChange,
  inputSRT,
  inputLabel,
  inputHelper }) => {

  function onBlur() {
    // prevent warning for : jsx-a11y/no-onchange
  }

  return(

    <div className="input-field-container" data-input="select">

      <select
        id={inputId}
        className="input-field"
        value={inputValue}
        disabled={inputDisabled}
        onBlur={onBlur()}
        onChange={inputChange}
      >
        {children}
      </select>

      <label htmlFor={inputId} className="input-field-label" data-srt={inputSRT}>{inputLabel}</label>

      {inputHelper && (
        <span className="input-field-helper">{inputHelper}</span>
      )}

      <span className="input-field-icon" aria-hidden="true"></span>

    </div>
  )

}

Select.propTypes = {
  inputId: PropTypes.string,
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  inputDisabled: PropTypes.bool,
  inputChange: PropTypes.func,
  inputSRT: PropTypes.string,
  inputLabel: PropTypes.string,
  inputHelper: PropTypes.string
}

Select.defaultProps = {
  inputId: ``,
  inputValue: ``,
  inputDisabled: false,
  inputChange: ``,
  inputSRT: ``,
  inputLabel: ``,
  inputHelper: ``
}

export default Select
