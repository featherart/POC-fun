import React, { useState } from 'react'
import ReactDOM from 'react-dom'
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
  const classes = cx('container', className, styleClasses)
  return (
    <div className='ui tooltip'>
      <div className={`${classes} ${show ? 'show' : ''}`}>
        <span>{header}</span>
        <p>{message}</p>
      </div>
      <span onClick={() => toggleShow(!show)}>{children}</span>
    </div>
  )
}
