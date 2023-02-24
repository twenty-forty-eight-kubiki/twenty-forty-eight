import './RegistrationForm.scss'
import React, { FormEvent, ReactElement, useState } from 'react'
import GuiInput from "../../ui/GuiInput/GuiInput";
import GuiButton from "../../ui/GuiButton/GuiButton";
import { FormFields } from '../../types/form'

const RegistrationForm = (): ReactElement => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [surname, setSurname] = useState('')
  const [errors, setErrors] = useState({
    firstname: '',
    surname: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      return
    }
    //api
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

  const onChangeConfirmPassword = (e: FormEvent) => {
    setConfirmPassword((e.target as HTMLInputElement).value)
  }

  const resetError = (fieldName: string) => {
    const errorsObj = { ...errors, [fieldName]: '' }
    setErrors(errorsObj)
  }

  const validate = () => {
    const errorsObj = {
      firstname: '',
      surname: '',
      email: '',
      password: '',
      confirmPassword: '',
    }

    let isValid = true
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

    if (confirmPassword.length === 0) {
      isValid = false
      errorsObj[FormFields.ConfirmPassword] = 'Поле необходимо заполнить'
    } else if (password !== confirmPassword) {
      isValid = false
      errorsObj[FormFields.ConfirmPassword] = 'Пароли не совпадают'
    }

    setErrors(errorsObj)

    return isValid
  }

  return (
    <div className="registration-form">
      <div className="registration-form__inner">
        <div className="registration-form__wrapper">
          <div>
            <h1 className="registration-form__title">Sign Up</h1>

            <div className="registration-form__text">
              To continue, please, sign up!
            </div>
          </div>

          <form onSubmit={onSubmit}>
            <GuiInput
              name={FormFields.Firstname}
              label="FirstName"
              placeholder="Enter your firstname"
              value={firstname}
              error={errors[FormFields.Firstname]}
              onChange={onChangeFirstname}
              onBlur={resetError}
              onFocus={resetError}
            />

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

            <GuiInput
              name={FormFields.Password}
              label="Password"
              placeholder="Enter your password"
              value={password}
              error={errors[FormFields.Password]}
              onChange={onChangePassword}
              onBlur={resetError}
              onFocus={resetError}
            />

            <GuiInput
              name={FormFields.ConfirmPassword}
              label="Repeat Password"
              placeholder="Confirm password"
              value={confirmPassword}
              error={errors[FormFields.ConfirmPassword]}
              onChange={onChangeConfirmPassword}
              onBlur={resetError}
              onFocus={resetError}
            />

            <GuiButton
              type="submit"
              btnText="Sign up"
              className="registration-form__btn"
            />

            <div className="registration-form__info">
              Already have an account <a className="base-link">Log in</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm
