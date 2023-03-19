import React, { FormEvent, ReactElement, useState } from 'react'
import GuiButton from '../../ui/GuiButton/GuiButton'
import GuiInput from '../../ui/GuiInput/GuiInput'
import Modal from '../Modal/Modal'
import { FileModal } from '../FileModal/FileModal'
import EasyValidator, { IValidationSchema } from '../../helpers/easy-validator'
import { ProfileFormFields, ProfileErrorsObj } from '../../types/form'
import { useAppDispatch, useAppSelector } from '../../hooks/store'
import { getUserData } from '../../store/selectors'
import {
  PasswordRequestData,
  ProfileRequestData,
} from '../../types/api/profieApi'
import { profileAPI } from '../../api/profileApi'
import { updateUserData } from '../../store/reducers/AuthSlice'
import { getAvatar } from '../../helpers/getAvatar'
import TextError from '../../ui/TextError/TextError'
import '../ProfileList/ProfileList.scss'

const ProfileForm = (): ReactElement => {
  const userData = useAppSelector(getUserData)
  const dispatch = useAppDispatch()

  const [isModal, setModal] = useState(false)
  const [email, setEmail] = useState(userData?.email || '')
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [firstname, setFirstname] = useState(userData?.first_name || '')
  const [displayName, setDisplayName] = useState(userData?.display_name || '')
  const [surname, setSurname] = useState(userData?.second_name || '')
  const [login, setLogin] = useState(userData?.login || '')
  const [avatar] = useState(getAvatar(userData?.avatar))
  const [phone, setPhone] = useState(() =>
    userData?.phone ? userData?.phone : ''
  )
  const [profileDataError, setProfileDataError] = useState('')
  const [passwordDataError, setPasswordDataError] = useState('')
  const [passwordDataSuccess, setPasswordDataSuccess] = useState('')
  const [profileDataSuccess, setProfileDataSuccess] = useState('')
  const [errors, setErrors] = useState<ProfileErrorsObj>({
    firstname: '',
    surname: '',
    displayName: '',
    email: '',
    password: '',
    oldPassword: '',
    login: '',
    phone: '',
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
    login: {
      isRequired: { msg: 'This field is required' },
      minLength: { value: 3, msg: 'Minimum 3 characters' },
      maxLength: { value: 20, msg: 'Maximum 20 characters' },
    },
    phone: {
      isRequired: { msg: 'This field is required' },
      minLength: { value: 9, msg: 'Minimum 9 characters' },
      maxLength: { value: 15, msg: 'Maximum 15 characters' },
      isCorrectPhone: { msg: 'Only digits must be registered' },
    },
  }

  const easyValidator = new EasyValidator(schema)

  const onChangeFirstname = (event: FormEvent<HTMLInputElement>) => {
    setFirstname(event.currentTarget.value)
  }

  const onChangeSurname = (e: React.FormEvent<HTMLInputElement>) => {
    setSurname(e.currentTarget.value)
  }

  const onChangeEmail = (e: React.FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value)
  }

  const onChangePassword = (e: React.FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value)
  }

  const onChangeDisplayName = (e: React.FormEvent<HTMLInputElement>) => {
    setDisplayName(e.currentTarget.value)
  }

  const onChangeOldPassword = (e: FormEvent<HTMLInputElement>) => {
    setOldPassword(e.currentTarget.value)
  }
  const onChangeLogin = (e: FormEvent<HTMLInputElement>) => {
    setLogin(e.currentTarget.value)
  }

  const onChangePhone = (e: FormEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value)
  }

  const resetError = (fieldName: ProfileFormFields) => {
    const errorsObj = { ...errors, [fieldName]: '' } as ProfileErrorsObj
    setErrors(errorsObj)
    setProfileDataSuccess('')
    setPasswordDataSuccess('')
    setPasswordDataError('')
    setProfileDataError('')
  }

  const openModal = () => {
    setModal(true)
  }

  const onChangeProfileBtnClick = () => {
    const errorsObj = easyValidator.validateFields({
      email,
      firstname,
      surname,
      displayName,
      login,
      phone,
    })

    setErrors({ ...errorsObj })

    if (easyValidator.isValid()) {
      const userData: ProfileRequestData = {
        login: login,
        second_name: surname,
        first_name: firstname,
        display_name: displayName,
        email: email,
        phone: phone,
      }

      profileAPI
        .profile(userData)
        .then(data => {
          dispatch(updateUserData(data))
          setProfileDataSuccess('Profile data was updated')
        })
        .catch((error: string) => {
          setProfileDataError(error)
          setProfileDataSuccess('')
        })
    }
  }

  const onChangePasswordBtnClick = () => {
    const errorsObj = easyValidator.validateFields({
      password,
      oldPassword,
    })

    setErrors({ ...errorsObj })

    if (easyValidator.isValid()) {
      const passwordData: PasswordRequestData = {
        oldPassword: oldPassword,
        newPassword: password,
      }

      profileAPI
        .password(passwordData)
        .then(() => {
          setPasswordDataSuccess('Password was changed')
          setPasswordDataError('')
        })
        .catch((error: string) => {
          setPasswordDataSuccess('')
          setPasswordDataError(error)
        })
    }
  }

  return (
    <div className="profile-list">
      <div className="profile-list__inner">
        <button
          className="profile-list__avatar profile-list__avatar--button"
          onClick={openModal}>
          <img
            className="profile-list__avatar-img"
            src={avatar}
            alt="User avatar"
          />
          <span className="profile-list__avatar-text">Change picture</span>
        </button>
        <form>
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
                  <div className="profile-list__item">
                    <GuiInput
                      label="Login"
                      placeholder="Enter your login"
                      value={login}
                      error={errors[ProfileFormFields.Login]}
                      onChange={onChangeLogin}
                      onBlur={() => resetError(ProfileFormFields.Login)}
                      onFocus={() => resetError(ProfileFormFields.Login)}
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
                  <div className="profile-list__item">
                    <GuiInput
                      label="Phone"
                      placeholder="Enter your phone"
                      value={phone}
                      error={errors[ProfileFormFields.Phone]}
                      onChange={onChangePhone}
                      onBlur={() => resetError(ProfileFormFields.Phone)}
                      onFocus={() => resetError(ProfileFormFields.Phone)}
                    />
                  </div>
                </div>
              </div>
              <GuiButton
                type="button"
                btnText="Update profile data"
                className="profile-list__btn profile-list__btn--change"
                onClick={onChangeProfileBtnClick}
              />
              <TextError text={profileDataSuccess} />
              <TextError text={profileDataError} />
            </div>
            <div className="profile-list__field">
              <h2 className="profile-list__title">Password Config</h2>
              <div className="profile-list__list">
                <div className="profile-list__column">
                  <div className="profile-list__item">
                    <GuiInput
                      label="Old password"
                      placeholder="Enter your old password"
                      type="password"
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
                      type="password"
                      value={password}
                      error={errors[ProfileFormFields.Password]}
                      onChange={onChangePassword}
                      onBlur={() => resetError(ProfileFormFields.Password)}
                      onFocus={() => resetError(ProfileFormFields.Password)}
                    />
                  </div>
                </div>
              </div>
              <GuiButton
                type="button"
                btnText="Update password"
                className="profile-list__btn profile-list__btn--change"
                onClick={onChangePasswordBtnClick}
              />
              <TextError text={passwordDataSuccess} />
              <TextError text={passwordDataError} />
            </div>
          </div>
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
