import './LoginForm.scss'
import React, { FormEvent, ReactElement, useState } from 'react'
import GuiInput from '../../ui/GuiInput/GuiInput'
import GuiButton from '../../ui/GuiButton/GuiButton'
import {FormFields} from "../../../types/form";

const LoginForm = (): ReactElement => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  })

  const validate = () => {
    const errorsObj = {
      email: '',
      password: '',
    }
    let isValid = true
    if (email.length === 0) {
      isValid = false
      errorsObj['email'] = 'Поле необходимо заполнить'
    }

    if (password.length === 0) {
      isValid = false
      errorsObj['password'] = 'Поле необходимо заполнить'
    }
    setErrors(errorsObj)

    return isValid
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    if (!validate()) {
      return
    }
    //send
  }

  const onChangeEmail = (e: FormEvent) => {
    setEmail((e.target as HTMLInputElement).value)
  }

  const onChangePassword = (e: FormEvent) => {
    setPassword((e.target as HTMLInputElement).value)
  }

  const resetError = (type: string) => {
    const errorsObj = { ...errors, [type]: '' }
    setErrors(errorsObj)
  }

  return (
    <div className="login-form">
      <div className="login-form-inner">
        <div className="login-form-wrapper">
          <div>
            <h1 className="login-form-title">Log In</h1>

            <div className="login-form-text">Welcome to the 2048 Game</div>
          </div>

          <form onSubmit={onSubmit}>
            <GuiInput
              name={FormFields.Email}
              label="Email"
              placeholder="example@yandex.ru"
              value={email}
              error={errors[FormFields.Email]}
              onChange={onChangeEmail}
              onBlur={resetError}
              onFocus={resetError}
            />

            <GuiInput
              name={FormFields.Password}
              label="Password"
              placeholder="password"
              value={password}
              error={errors[FormFields.Email]}
              onChange={onChangePassword}
              onBlur={resetError}
              onFocus={resetError}
            />

            <GuiButton
              type="submit"
              btnText="Log in"
              className="login-form-btn"
            />

            <div className="login-form-info">
              Don't have an account? <a className="base-link">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
