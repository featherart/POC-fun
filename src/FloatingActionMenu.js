import React, { useState } from 'react'
import { Tooltip } from './Tooltip'
import { Icon } from './Icon'
import './floatingActionMenu.css'

//const Icon = () => <span>icon</span>

const FloatingActions = ({
  actions,
  dark
}) => {
  const [menuOpen, toggleMenu] = useState()

  return (
    <div className='floating-actions-container' onBlur={() => toggleMenu(!menuOpen)}>
        {menuOpen && (
          <div className='list-menu-items'>
            {actions &&
              actions.map((action, i) => (
                <span key={i}>
                  <Tooltip
                    position='left'
                    message={action.tooltip}
                    trigger='hover'
                  >
                    <span
                      key={i}
                      className='menu-item'
                      onClick={action.onClick}
                    >
                      <Icon large name={action.icon} />
                    </span>
                  </Tooltip>
                </span>
              ))}
          </div>
        )}
        <div className='drawer-button' onClick={() => toggleMenu(!menuOpen)}>
          <Icon large name={menuOpen ? 'close-fill' : 'add-fill'} />
        </div>
    </div>
  )
}

export const FloatingActionMenu = ({ actions, dark }) => {
  return (
    <div className='ui floating-action-menu'>
      <FloatingActions actions={actions} dark={dark} />
    </div>
  )
}
