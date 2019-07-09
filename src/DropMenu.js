import React, { useState } from 'react'
import './dropMenu.css'

const DropMenuContainer = ({
  handleHover,
  handleExit,
  content,
  actions
}) =>
  <div className='drop-menu-backdrop'>
    <div className='drop-menu-inner' onMouseLeave={() => handleExit(false)}>
        {content &&
        <div className='drop-menu-content' onClick={() => console.log('clicked on a row')}>
          {content}
        </div>
        }
        {actions &&
        <div className='drop-menu-row' onClick={() => console.log('clicked on a row')}>
          {actions.map((action, i) => <span className='drop-menu-action' key={i}>{action.action}</span>)}
        </div>
        }
      </div>
  </div>

export const DropMenu = ({
  handleClick,
  onMouseOver,
  handleExit,
  content,
  actions
}) => {
  const [showMenu, toggleMenu] = useState(false)
  return (
    <div>
      <span
        className='ellipsis'
        onClick={() => toggleMenu(true)}
        onMouseOver={() => toggleMenu(false)}
      >
        ...
      </span>
      {showMenu &&
        <DropMenuContainer
          handleExit={toggleMenu}
          content={content}
          actions={actions}
        />}
    </div>
  )
}
