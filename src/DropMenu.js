import React, { useState } from 'react'
import './dropMenu.css'

const DropMenuContainer = ({
  containerClass,
  handleHover,
  handleExit,
  content
}) =>
  <div className='drop-menu-backdrop'>
    <div className='drop-menu' onMouseLeave={() => handleExit(false)}>
      <div className='drop-menu-inner'>
        <div className='drop-menu-row' onClick={() => console.log('hi')}>
          {content}
        </div>
      </div>
    </div>
  </div>

export const DropMenu = ({ handleClick, onMouseOver, handleExit }) => {
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
          containerClass={'action-menu-inner'}
          content={'pirate booties are here'}
        />}
    </div>
  )
}
