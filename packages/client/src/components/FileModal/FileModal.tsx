import React, { FormEvent, ReactElement } from 'react'
import './FileModal.scss'
import GuiButton from '../../ui/GuiButton/GuiButton'

const FileModal = (): ReactElement => {
  const fileInput = React.createRef()
  const fileLabel = React.createRef()
  const fileError = React.createRef()

  const onChange = (e: FormEvent) => {
    e.preventDefault()
    const file = (e.target as HTMLFormElement).files[0]
    ;(fileLabel.current as HTMLElement).textContent = file.name
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if ((fileInput.current as HTMLFormElement).files[0]) {
      const form = (e.target as HTMLFormElement).closest(
        'form'
      ) as HTMLFormElement
      const formData = new FormData(form)
      console.log(formData)
    } else {
      ;(fileError.current as HTMLElement).textContent = 'Add file'
    }
  }

  const resetError = () => {
    ;(fileError.current as HTMLElement).textContent = ''
  }

  return (
    <div className="file-modal">
      <form onSubmit={onSubmit}>
        <h2 className="file-modal__title">Upload file</h2>
        <label>
          <span className="file-modal__text" ref={fileLabel}>
            Select a file on your computer
          </span>
          <input
            type="file"
            name="avatar"
            placeholder=""
            id="avatar"
            accept="image/png, image/jpeg, image/heic"
            ref={fileInput}
            className="visually-hidden"
            onChange={onChange}
            onBlur={resetError}
            onFocus={resetError}
          />
        </label>
        <GuiButton
          type="submit"
          btnText="Update picture"
          className="file-modal__btn"
        />
        <p className="file-modal__error" ref={fileError}></p>
      </form>
    </div>
  )
}

export default FileModal
