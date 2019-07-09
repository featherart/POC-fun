import React, { useState } from 'react'
import cx from 'classnames'
import './tooltip.css'

export const Tooltip = ({
  children,
  header,
  message,
  position='top',
  className,
  success
}) => {
  const [show, toggleShow] = useState(false)
  const styleClasses = cx(
    { success },
    `${position}`
  )
  const classes = cx('ui tooltip', className, styleClasses)
  return (
    <div>
      <div className={`${classes} ${show ? 'show' : ''}`}>
        <span>{header}</span>
        <p>{message}</p>
      </div>
      <span onClick={() => toggleShow(!show)}>{children}</span>
    </div>
  )
}
