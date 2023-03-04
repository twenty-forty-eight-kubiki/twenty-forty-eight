import React, { SyntheticEvent } from 'react'
import './ModalCreateForumTopic.scss'

const ModalCreateForumTopic = (props: {
  onClose: (e: SyntheticEvent) => void
  children: any
}) => {
  return (
    <div>
      <div className="modal" onClick={props.onClose}>
        <div className="modal-inner" onClick={e => e.stopPropagation()}>
          <div className="modal__header">
            Создать тему форума
            <button className="button__close" onClick={props.onClose}>
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
