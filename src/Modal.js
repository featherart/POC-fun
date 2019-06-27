import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const InnerContent = ({
  header,
  content,
  close,
  onCancel,
  onConfirm,
  actions
}) => {
  return ReactDOM.createPortal(
    <div className="modal-container">
      <div className="modal-body">
        <header className="modal-header">
          <span>
            {header}
          </span>
          <span className="close-x" onClick={() => close(false)}>
            ✕
          </span>
        </header>
        <div className="modal-content">
          {content}
        </div>
        <div className="modal-actions">
          {onCancel &&
            <button onClick={() => close(false)} className="cancel-button">
              Cancel
            </button>}
          {onConfirm &&
            <button onClick={onConfirm} className="confirm-button">
              Confirm
            </button>}
        </div>
      </div>
    </div>,
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
  return (
    <div>
      {!isShown &&
        <button
          className="confirm-button"
          onClick={() => toggleShown(!isShown)}
        >
          {openMessage}
        </button>}
      {isShown &&
        <InnerContent
          close={toggleShown}
          header={header}
          content={content}
          onConfirm={onConfirm}
          onCancel={onCancel}
          actions={actions}
        />}
    </div>
  )
}
