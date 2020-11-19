import React from 'react'
import PropTypes from 'prop-types'
import './TypeMessage.scss'

const TypeMessage = ({ text, type, className }) => {
  return <p className={`message message--${type} ${className}`}>{text}</p>
}

TypeMessage.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string.isRequired
}

TypeMessage.defaultProps = {
  type: 'normal',
  className: ''
}

export default TypeMessage
