import React, { useState } from 'react'
import cx from 'classnames'
import './tooltip.css'

const TooltipContainer = ({
  toggleShow,
  classes,
  header,
  message
}) => (
  <div className='tooltip-backdrop'>
    <div className={classes} onMouseLeave={() => toggleShow(false)}>
      <span className='tooltip-header'>{header}</span>
      <p className='tooltip-body'>{message}</p>
    </div>
  </div>
)

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
  const classes = cx('tooltip-content', className, styleClasses)
  return (
    <div>
      <span
        onClick={() => toggleShow(!showTooltip)}>
        {children}
      </span>
      {
        showTooltip &&
        <TooltipContainer
          toggleShow={toggleShow}
          classes={classes}
          header={header}
          message={message}
        />
      }
    </div>
  )
}
