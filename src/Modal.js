import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const InnerContent = ({ children, close }) => {
  return ReactDOM.createPortal(
    <div className='modal-container'>
      <div className='modal-body'>
        <header className='modal-header'>
          <span>welcome to my modal</span>
          <span
            className='close-x'
            onClick={() => close(false)}
          >
            X
          </span>
        </header>   
        <div className='modal-content'>
          {children}
        </div>
      </div>
    </div>
    ,
    document.body
  )
}

export const Modal = ({ content }) => {
  const [isShown, toggleShown] = useState(false)

  return (
    <>
      {!isShown && <button onClick={() => toggleShown(!isShown)}>hi</button>}
      {isShown && <InnerContent close={toggleShown} />}
    </>
  )
}
