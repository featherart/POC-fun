import React, { useState } from 'react'
import cx from 'classnames'
import './tooltip.css'

export const Tooltip = ({
  children,
  header,
  message,
  className,
  success
}) => {
  const [show, toggleShow] = useState(false)
  const styleClasses = cx(
    { success }
  )
  const classes = cx('ui tooltip', className, styleClasses)
  return (
    <div className='container'>
      <div className={`${classes} ${show ? 'show' : ''}`}>
        <span>{header}</span>
        <p>{message}</p>
      </div>
      <span onClick={() => toggleShow(!show)}>{children}</span>
    </div>
  )
}
