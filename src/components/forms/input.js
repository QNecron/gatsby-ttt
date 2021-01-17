import React from "react"
import PropTypes from "prop-types"

const Input = ({
  inputType,
  inputId,
  inputDisabled,
  inputName,
  inputStep,
  inputValue,
  inputChecked,
  inputChange,
  inputClick,
  inputSRT,
  inputLabel,
  inputHelper }) => {

  return(

    <div className="input-field-container" data-input={inputType}>

      <input
        type={inputType}
        id={inputId}
        className="input-field"
        disabled={inputDisabled ? inputDisabled : false}
        name={inputName}
        step={inputStep}
        value={inputValue}
        defaultChecked={inputChecked}
        onChange={inputChange}
        onClick={inputClick}
      />

      <label htmlFor={inputId} className="input-field-label" data-srt={inputSRT}>
        {inputLabel}
      </label>

      {inputHelper && (
        <span className="input-field-helper">{inputHelper}</span>
      )}

      {(inputType === "checkbox" || inputType === "radio") && (
        <span className="input-field-icon" aria-hidden="true"></span>
      )}

    </div>
  )

}

Input.propTypes = {
  inputType: PropTypes.string,
  inputId: PropTypes.string,
  inputDisabled: PropTypes.bool,
  inputName: PropTypes.string,
  inputStep: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  inputValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  inputChange: PropTypes.func,
  inputClick: PropTypes.func,
  inputSRT: PropTypes.string,
  inputLabel: PropTypes.string,
  inputHelper: PropTypes.string
}

Input.defaultProps = {
  inputType: ``,
  inputId: ``,
  inputDisabled: false,
  inputName: ``,
  inputStep: ``,
  inputValue: ``,
  inputChecked: false,
  inputChange: (e) => null,
  inputClick: (e) => null,
  inputSRT: ``,
  inputLabel: ``,
  inputHelper: ``
}

export default Input
