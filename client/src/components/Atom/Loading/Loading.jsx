import React from 'react'
import PropTypes from 'prop-types'
import LoaderIcon from './LoaderIcon'
import './Loading.scss'

export const Loading = ({ className, color }) => {
  return (
    <div className={`loading ${className}`}>
      <LoaderIcon color={color} />
    </div>
  )
}

Loading.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string
}

Loading.defaultProps = {
  color: '#298a95'
}

export default React.memo(Loading)
