import '../ProfileList/ProfileList.scss';
import '../Modal/Modal.scss';
import React, { FormEvent, ReactElement, useState } from 'react';
import GuiButton from "../../ui/GuiButton/GuiButton";
import { FormFields } from '../../types/form';
import GuiInput from '../../ui/GuiInput/GuiInput';
import Modal from '../Modal/Modal';
import FileModal from '../FileModal/FileModal'

const ProfileForm = (): ReactElement => {
  const [isModal, setModal] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [oldPassword, setOldPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [surname, setSurname] = useState('')
  const [avatar, setAvatar] = useState('img/user-icon.png')
  const [errors, setErrors] = useState({
    firstname: '',
    surname: '',
    displayName: '',
    email: '',
    password: '',
    oldPassword: '',
  })
  const validate = () => {
    const errorsObj = {
      firstname: '',
      surname: '',
      displayName: '',
      email: '',
      password: '',
      oldPassword: '',
    }

    let isValid = true;

    if (firstname.length === 0) {
      isValid = false
      errorsObj[FormFields.Firstname] = 'Поле необходимо заполнить'
    } else if (firstname.length < 3 || firstname.length > 50) {
      isValid = false
      errorsObj[FormFields.Firstname] = 'Длина должна быть больше от 3 до 50'
    }

    if (surname.length === 0) {
      isValid = false
      errorsObj[FormFields.Surname] = 'Поле необходимо заполнить'
    } else if (firstname.length < 3 || firstname.length > 50) {
      isValid = false
      errorsObj[FormFields.Surname] = 'Длина должна быть больше от 3 до 50'
    }

    if (email.length === 0) {
      isValid = false
      errorsObj[FormFields.Email] = 'Поле необходимо заполнить'
    } else if (!/^([\w.-])+@([\w.-])+\.([A-Za-z]{2,4})$/.test(email)) {
      isValid = false
      errorsObj[FormFields.Email] = 'Введите корректный email'
    }

    if (password.length === 0) {
      isValid = false
      errorsObj[FormFields.Password] = 'Поле необходимо заполнить'
    } else if (!/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,40}$/.test(password)) {
      isValid = false
      errorsObj[FormFields.Password] =
        'Пароль должен быть от 8 до 40 символов, хотя бы одна заглавная буква и цифра.'
    }

    if (oldPassword.length === 0) {
      isValid = false
      errorsObj[FormFields.OldPassword] = 'Поле необходимо заполнить'
    }

    if (displayName.length === 0) {
      isValid = false
      errorsObj[FormFields.DisplayName] = 'Поле необходимо заполнить';
    } else if ((!/^[А-ЯA-Z][a-zA-Zа-яА-Я-]+$/.test(displayName))) {
      isValid = false
      errorsObj[FormFields.DisplayName] = 'Первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)'
    }

    setErrors(errorsObj);

    return isValid
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      return
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
    setModal(true);
  }

  return (
    <div className="profile-list">
      <div className="profile-list__inner">
        <button className="profile-list__avatar profile-list__avatar--button" onClick={openModal}>
          <img  src={avatar} alt="User avatar" />
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
