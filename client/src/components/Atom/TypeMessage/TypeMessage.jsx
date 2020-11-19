import React from 'react'
import './TypeMessage.scss'

const TypeMessage = ({ text, type, className }) => {
  return <p className={`message message--${type} ${className}`}>{text}</p>
}

TypeMessage.defaultProps = {
  type: 'normal',
  className: ''
}

export default TypeMessage
