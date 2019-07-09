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
  const [showTooltip, toggleShow] = useState(false)
  const styleClasses = cx(
    { success },
    `${position}`
  )
  const classes = cx('ui tooltip', className, styleClasses)
  return (
    <div>
      <span
        onClick={() => toggleShow(!showTooltip)}>
        {children}
      </span>
      {
        showTooltip &&
        <div className={classes}>
          <span>{header}</span>
          <p>{message}</p>
        </div>
      }
    </div>
  )
}
