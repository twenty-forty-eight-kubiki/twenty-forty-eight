import '../ProfileList/ProfileList.scss'
import '../Modal/Modal.scss'
import React, { FormEvent, ReactElement, useState } from 'react'
import GuiButton from '../../ui/GuiButton/GuiButton'
import { FormFields } from '../../types/form'
import GuiInput from '../../ui/GuiInput/GuiInput'
import Modal from '../Modal/Modal'
import FileModal from '../FileModal/FileModal'
import EasyValidator, { IValidationSchema } from '../../helpers/easy-validator'
import { isCorrectPassword, isDisplayName } from '../../helpers/validators'

const ProfileForm = (): ReactElement => {
  const [isModal, setModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [surname, setSurname] = useState('')
  const [avatar] = useState('img/user-icon.png')
  const [errors, setErrors] = useState({
    firstname: '',
    surname: '',
    displayName: '',
    email: '',
    password: '',
    oldPassword: '',
  })

  const schema: IValidationSchema = {
    firstname: {
      isRequired: { msg: 'This field is required' },
      minLength: { value: 3, msg: 'Minimum 3 characters' },
      maxLength: { value: 50, msg: 'Maximum 50 characters' },
    },
    surname: {
      isRequired: { msg: 'This field is required' },
      minLength: { value: 3, msg: 'Minimum 3 characters' },
      maxLength: { value: 50, msg: 'Maximum 50 characters' },
    },
    email: {
      isRequired: { msg: 'This field is required' },
      isEmail: { msg: 'Enter a valid email' },
    },
    oldPassword: {
      isRequired: { msg: 'This field is required' },
    },
    password: {
      isRequired: { msg: 'This field is required' },
      minLength: { value: 8, msg: 'Минимум 8 символа' },
      maxLength: { value: 40, msg: 'Максимум 40 символов' },
      isCorrectPassword: {msg: 'Password must contain at least one uppercase letter and a number'}
    },
    displayName: {
      isRequired: { msg: 'This field is required' },
      isDisplayName: { msg: 'The first letter must be capital, no spaces and no numbers, no special characters (only a hyphen is allowed)' },
    },
  }

  const easyValidator = new EasyValidator(schema)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errorsObj = easyValidator.validateFields({
      email,
      firstname,
      surname,
      password,
      oldPassword,
      displayName
    })

    // @ts-ignore
    setErrors({ ...errorsObj })

    if (easyValidator.isValid()) {
      //api
    }
  }

  const onChangeFirstname = (e: FormEvent) => {
    setFirstname((e.target as HTMLInputElement).value)
  }

  const onChangeSurname = (e: FormEvent) => {
    setSurname((e.target as HTMLInputElement).value)
  }

  const onChangeEmail = (e: FormEvent) => {
    setEmail((e.target as HTMLInputElement).value)
  }

  const onChangePassword = (e: FormEvent) => {
    setPassword((e.target as HTMLInputElement).value)
  }

  const onChangeDisplayName = (e: FormEvent) => {
    setDisplayName((e.target as HTMLInputElement).value)
  }

  const onChangeOldPassword = (e: FormEvent) => {
    setOldPassword((e.target as HTMLInputElement).value)
  }

  const resetError = (fieldName: string) => {
    const errorsObj = { ...errors, [fieldName]: '' }
    setErrors(errorsObj)
  }

  const openModal = () => {
    setModal(true)
  }

  return (
    <div className="profile-list">
      <div className="profile-list__inner">
        <button
          className="profile-list__avatar profile-list__avatar--button"
          onClick={openModal}>
          <img src={avatar} alt="User avatar" />
          <span>Change picture</span>
        </button>
        <form onSubmit={onSubmit}>
          <div className="profile-list__fields">
            <div className="profile-list__field">
              <h2 className="profile-list__title">Profile info</h2>
              <div className="profile-list__list">
                <div className="profile-list__column">
                  <div className="profile-list__item">
                    <GuiInput
                      name={FormFields.Firstname}
                      label="Name"
                      placeholder="Enter your name"
                      value={firstname}
                      error={errors[FormFields.Firstname]}
                      onChange={onChangeFirstname}
                      onBlur={resetError}
                      onFocus={resetError}
                    />
                  </div>
                  <div className="profile-list__item">
                    <GuiInput
                      name={FormFields.Surname}
                      label="Surname"
                      placeholder="Enter your surname"
                      value={surname}
                      error={errors[FormFields.Surname]}
                      onChange={onChangeSurname}
                      onBlur={resetError}
                      onFocus={resetError}
                    />
                  </div>
                  <div className="profile-list__item">
                    <GuiInput
                      name={FormFields.DisplayName}
                      label="Display name"
                      placeholder="Enter your display name"
                      value={displayName}
                      error={errors[FormFields.DisplayName]}
                      onChange={onChangeDisplayName}
                      onBlur={resetError}
                      onFocus={resetError}
                    />
                  </div>
                </div>
                <div className="profile-list__column">
                  <div className="profile-list__item">
                    <GuiInput
                      name={FormFields.Email}
                      label="Email"
                      placeholder="Enter your email"
                      value={email}
                      error={errors[FormFields.Email]}
                      onChange={onChangeEmail}
                      onBlur={resetError}
                      onFocus={resetError}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-list__field">
              <h2 className="profile-list__title">Password Config</h2>
              <div className="profile-list__list">
                <div className="profile-list__column">
                  <div className="profile-list__item">
                    <GuiInput
                      name={FormFields.OldPassword}
                      label="Old password"
                      placeholder="Enter your old password"
                      value={oldPassword}
                      error={errors[FormFields.OldPassword]}
                      onChange={onChangeOldPassword}
                      onBlur={resetError}
                      onFocus={resetError}
                    />
                  </div>
                  <div className="profile-list__item">
                    <GuiInput
                      name={FormFields.Password}
                      label="New password"
                      placeholder="Enter your new password"
                      value={password}
                      error={errors[FormFields.Password]}
                      onChange={onChangePassword}
                      onBlur={resetError}
                      onFocus={resetError}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <GuiButton
            type="submit"
            btnText="Update"
            className="profile-list__btn"
          />
        </form>
      </div>
      <Modal
        isVisible={isModal}
        content={<FileModal />}
        onClose={() => setModal(false)}
      />
    </div>
  )
}

export default ProfileForm
