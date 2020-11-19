import React from 'react'
import PropTypes from 'prop-types'
import './LinkButton.scss'

const LinkButton = ({ handleClick, href, className, text }) => {
  return (
    <a
      className={`link-button  ${className}`}
      href={href}
      onClick={handleClick}
    >
      {text}
    </a>
  )
}

LinkButton.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  className: PropTypes.string,
  handleClick: PropTypes.func
}

LinkButton.defaultProps = {
  className: ''
}

export default LinkButton
