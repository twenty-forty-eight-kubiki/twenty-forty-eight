import React from 'react'
import './ModalCreateForumTopic.scss'

const ModalCreateForumTopic = (props: {
  modalClose: (e: { stopPropagation: () => void }) => void
  children: any
}) => {
  return (
    <div>
      <div className="modal" onClick={props.modalClose}>
        <div className="modal-inner" onClick={e => e.stopPropagation()}>
          <div className="modal__header">
            Создать тему форума
            <button className="button__close" onClick={props.modalClose}>
              &times;
            </button>
          </div>
          <div className="modal__body">{props.children}</div>
        </div>
      </div>
    </div>
  )
}

export default ModalCreateForumTopic
