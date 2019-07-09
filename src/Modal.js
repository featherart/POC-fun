import React from 'react'
import ReactDOM from 'react-dom'
import './modal.css'

const InnerContent = ({
  title,
  content,
  closeModal,
  onCancel,
  onConfirm,
  actions
}) => {
  return ReactDOM.createPortal(
    <div className={'modal-container'}>
      <div className={'modal-body'}>
        <header className={'modal-title'}>
          <span>
            {title}
          </span>
          <span className={'close-x'} onClick={() => closeModal(false)}>
            ✕
          </span>
        </header>
        <div className={'modal-content'}>
          {content}
        </div>
        <div className={'modal-actions'}>
          {onCancel &&
            <button className={'cancel-button'} onClick={() => closeModal(false)}>
              Cancel
            </button>}
          {onConfirm &&
            <button className={'confirm-button'} onClick={onConfirm}>
              Confirm
            </button>}
        </div>
      </div>
    </div>,
    document.body
  )
}

export const Modal = ({
  trigger,
  triggerMessage,
  title,
  content,
  onConfirm,
  onCancel,
  actions
}) => {
  const [isShown, toggleShown] = React.useState(false)
  const Trigger = () =>
    trigger === 'button'
      ? <button onClick={() => toggleShown(true)}>
          {triggerMessage}
        </button>
      : <span onClick={() => toggleShown(true)}>{triggerMessage}</span>

  return (
    <div>
      {!isShown &&
        <Trigger />
      }
      {isShown &&
        <InnerContent
          closeModal={toggleShown}
          title={title}
          content={content}
          onConfirm={onConfirm}
          onCancel={onCancel}
          actions={actions}
        />}
    </div>
  )
}
