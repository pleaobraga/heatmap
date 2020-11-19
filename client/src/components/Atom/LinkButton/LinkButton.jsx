import React from 'react'
import PropTypes from 'prop-types'
import './LinkButton.scss'

const LinkButton = ({ handleCLick, href, className, text }) => {
  return (
    <a
      className={`link-button  ${className}`}
      href={href}
      onClick={handleCLick}
    >
      {text}
    </a>
  )
}

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleCLick: PropTypes.func
}

LinkButton.defaultProps = {
  className: ''
}

export default LinkButton
