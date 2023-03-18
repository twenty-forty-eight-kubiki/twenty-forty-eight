import React, { ReactNode, useEffect } from 'react'
import './Modal.scss'

interface ModalProps {
  isVisible: boolean
  content: ReactNode
  onClose: () => void
}

const Modal = ({ isVisible = false, content, onClose }: ModalProps) => {
  const keydownHandler = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'Escape':
        onClose()
        break
      default:
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', keydownHandler)
    return () => document.removeEventListener('keydown', keydownHandler)
  }, [isVisible])

  return isVisible ? (
    <div className="modal" onClick={onClose}>
      <div className="modal__wrapper">
        <div className="modal__overlay"></div>
        <div className="modal__content" onClick={e => e.stopPropagation()}>
          <button
            className="modal__close-btn"
            type="button"
            aria-label="Close popup"
            onClick={onClose}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M13.0001 13L1.00317 1"
                stroke="black"
                strokeLinecap="round"></path>
              <path
                d="M1.00047 13L12.9974 1"
                stroke="black"
                strokeLinecap="round"></path>
            </svg>
          </button>
          {content}
        </div>
      </div>
    </div>
  ) : null
}

export default Modal
