import React, { FormEvent, ReactElement, useState } from 'react'
import GuiButton from '../../ui/GuiButton/GuiButton'
import './FileModal.scss'
import { profileAPI } from '../../api/profileApi'
import { useAppDispatch } from '../../hooks/store'
import { fetchUser } from '../../store/auth-actions'
import { FileRequestData } from '../../types/api/profieApi'

const FileModal = (): ReactElement => {
  const dispatch = useAppDispatch()
  const [fileLabel, setFileLabel] = useState('Select a file on your computer')
  const [fileError, setFileError] = useState('')
  const [file, setFile] = useState<File>()

  const onFileChange = (event: React.FormEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files
    if (files && files.length > 0) {
      setFile(files[0])
      setFileLabel(files[0].name)
    }
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()

    if (!file) {
      setFileError('Add file')
    } else {
      const fileData: FileRequestData = {
        file: file,
        fileName: 'avatar',
      }
      profileAPI
        .avatar(fileData)
        .then(() => dispatch(fetchUser()))
        .catch(error => setFileError(error))
    }
  }

  const resetError = () => {
    setFileError('')
  }

  return (
    <div className="file-modal">
      <form onSubmit={onSubmit} className="file-modal__form">
        <h2 className="file-modal__title">Upload file</h2>
        <label className="file-modal__label">
          <span className="file-modal__text">{fileLabel}</span>
          <input
            type="file"
            name="avatar"
            placeholder=""
            id="avatar"
            accept="image/png, image/jpeg, image/heic"
            className="visually-hidden"
            onChange={onFileChange}
            onBlur={resetError}
            onFocus={resetError}
          />
        </label>
        <GuiButton
          type="submit"
          btnText="Update picture"
          className="file-modal__btn"
        />
        <p className="file-modal__error">{fileError}</p>
      </form>
    </div>
  )
}

export { FileModal }
