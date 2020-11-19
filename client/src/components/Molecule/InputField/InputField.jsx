import React from 'react'
import './InputField.scss'

const InputField = ({
  label,
  value,
  onChange,
  name,
  error,
  className,
  type
}) => {
  const { hasError } = error

  return (
    <div
      className={`input-field ${className} ${hasError && 'input-field--error'}`}
    >
      <label className="input-field__label">{label}</label>
      <input
        className="input-field__input"
        name={name}
        value={value}
        onChange={onChange}
        type={type}
      />
      {hasError && (
        <span className="input-field__erro-message">{error.message}</span>
      )}
    </div>
  )
}

InputField.defaultProps = {
  className: '',
  type: 'text'
}

export default InputField
