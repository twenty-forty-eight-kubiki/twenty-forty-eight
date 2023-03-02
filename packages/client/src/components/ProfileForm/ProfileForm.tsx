import '../ProfileList/ProfileList.scss'
import '../Modal/Modal.scss'
import React, { FormEvent, ReactElement, useState } from 'react'
import GuiButton from '../../ui/GuiButton/GuiButton'
import GuiInput from '../../ui/GuiInput/GuiInput'
import Modal from '../Modal/Modal'
import FileModal from '../FileModal/FileModal'
import EasyValidator, { IValidationSchema } from '../../helpers/easy-validator'
import { ProfileFormFields, ProfileErrorsObj, RegistrationFormFields } from '../../types/form'

const ProfileForm = (): ReactElement => {
  const [isModal, setModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [surname, setSurname] = useState('')
  const [avatar] = useState('img/user-icon.png')
  const [errors, setErrors] = useState<ProfileErrorsObj>({
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
      minLength: { value: 8, msg: 'Minimum 8 characters' },
      maxLength: { value: 40, msg: 'Maximum 40 characters' },
      isCorrectPassword: {
        msg: 'Password must contain at least one uppercase letter and a number',
      },
    },
    displayName: {
      isRequired: { msg: 'This field is required' },
      isDisplayName: {
        msg: 'The first letter must be capital, no spaces and no numbers, no special characters (only a hyphen is allowed)',
      },
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
      displayName,
    });

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
    const errorsObj = { ...errors, [fieldName]: '' } as ProfileErrorsObj
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
                      label="Name"
                      placeholder="Enter your name"
                      value={firstname}
                      error={errors[ProfileFormFields.Firstname]}
                      onChange={onChangeFirstname}
                      onBlur={() => resetError(ProfileFormFields.Firstname)}
                      onFocus={() => resetError(ProfileFormFields.Firstname)}
                    />
                  </div>
                  <div className="profile-list__item">
                    <GuiInput
                      label="Surname"
                      placeholder="Enter your surname"
                      value={surname}
                      error={errors[ProfileFormFields.Surname]}
                      onChange={onChangeSurname}
                      onBlur={() => resetError(ProfileFormFields.Surname)}
                      onFocus={() => resetError(ProfileFormFields.Surname)}
                    />
                  </div>
                  <div className="profile-list__item">
                    <GuiInput
                      label="Display name"
                      placeholder="Enter your display name"
                      value={displayName}
                      error={errors[ProfileFormFields.DisplayName]}
                      onChange={onChangeDisplayName}
                      onBlur={() => resetError(ProfileFormFields.DisplayName)}
                      onFocus={() => resetError(ProfileFormFields.DisplayName)}
                    />
                  </div>
                </div>
                <div className="profile-list__column">
                  <div className="profile-list__item">
                    <GuiInput
                      label="Email"
                      placeholder="Enter your email"
                      value={email}
                      error={errors[ProfileFormFields.Email]}
                      onChange={onChangeEmail}
                      onBlur={() => resetError(ProfileFormFields.Email)}
                      onFocus={() => resetError(ProfileFormFields.Email)}
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
                      label="Old password"
                      placeholder="Enter your old password"
                      value={oldPassword}
                      error={errors[ProfileFormFields.OldPassword]}
                      onChange={onChangeOldPassword}
                      onBlur={() => resetError(ProfileFormFields.OldPassword)}
                      onFocus={() => resetError(ProfileFormFields.OldPassword)}
                    />
                  </div>
                  <div className="profile-list__item">
                    <GuiInput
                      label="New password"
                      placeholder="Enter your new password"
                      value={password}
                      error={errors[ProfileFormFields.Password]}
                      onChange={onChangePassword}
                      onBlur={() => resetError(ProfileFormFields.Password)}
                      onFocus={() => resetError(ProfileFormFields.Password)}
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
