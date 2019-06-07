import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import { useTransition, animated, config } from 'react-spring'

const InnerContent = ({
  header,
  content,
  close,
  onCancel,
  onConfirm,
  actions
}) => {
  return ReactDOM.createPortal(
    <div className='modal-container'>
      <div className='modal-body'>
        <header className='modal-header'>
          <span>{header}</span>
          <span
            className='close-x'
            onClick={() => close(false)}>
            ✕
          </span>
        </header>   
        <div className='modal-content'>
          {content}
        </div>
        <div className='modal-actions'>
          {onCancel && <button onClick={() => close(false)} className='cancel-button'>Cancel</button>}
          {onConfirm && <button onClick={onConfirm} className='confirm-button'>Confirm</button>}
        </div>
      </div>
    </div>
    ,
    document.body
  )
}



export const Modal = ({
  openMessage,
  header,
  content,
  onConfirm,
  onCancel,
  actions
}) => {
  const [isShown, toggleShown] = useState(false)
  const transitions = useTransition(isShown, InnerContent, {
    from: { opacity: 0  },
    enter: { opacity: isShown ? 1 : 0 },
    leave: { opacity: 0 },
    config: config.molasses
  })
  return (
    <>
      {!isShown &&
        <button
          className='confirm-button'
          onClick={() => toggleShown(!isShown)}>
          {openMessage}
        </button>}
      { transitions.map(({ item, key, props }) =>
        isShown &&
        <animated.div key={key} style={props}>
          <InnerContent
            close={toggleShown}
            header={header}
            content={content}
            onConfirm={onConfirm}
            onCancel={onCancel}
            actions={actions}
          />
        </animated.div>
      )
      }
    </>
  )
}
