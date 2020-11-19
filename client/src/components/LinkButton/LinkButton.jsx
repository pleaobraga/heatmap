import React from 'react'
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

LinkButton.defaultProps = {
  className: ''
}

export default LinkButton
