import React, { FormEvent, ReactElement, useState } from 'react'
import GuiInput from '../../ui/GuiInput/GuiInput'
import GuiButton from '../../ui/GuiButton/GuiButton'
import { LoginErrorsObj, LoginFormFields } from '../../types/form'
import EasyValidator, { IValidationSchema } from '../../helpers/easy-validator'
import GuiLink from '../../ui/GuiLink/GuiLink'
import './LoginForm.scss'
import { Link } from 'react-router-dom'

const LoginForm = (): ReactElement => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<LoginErrorsObj>({
    email: null,
    password: null,
  })

  const schema: IValidationSchema = {
    email: {
      isRequired: { msg: 'Это поле обязательно для заполнения' },
      isEmail: { msg: 'Введите корректный email' },
    },
    password: {
      isRequired: { msg: 'Это поле обязательно для заполнения' },
    },
  }

  const easyValidator = new EasyValidator(schema)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errorsObj = easyValidator.validateFields({ email, password })

    setErrors({ ...errorsObj })

    if (easyValidator.isValid()) {
      //api
    }
  }

  const onChangeEmail = (e: FormEvent) => {
    setEmail((e.target as HTMLInputElement).value)
  }

  const onChangePassword = (e: FormEvent) => {
    setPassword((e.target as HTMLInputElement).value)
  }

  const resetError = (type: LoginFormFields) => {
    const errorsObj = { ...errors, [type]: '' } as LoginErrorsObj
    setErrors(errorsObj)
  }

  return (
    <div className="login-form">
      <div className="login-form__inner">
        <div className="login-form__wrapper">
          <div>
            <h1 className="login-form__title">Log In</h1>

            <div className="login-form__text">Welcome to the 2048 Game</div>
          </div>

          <form onSubmit={onSubmit}>
            <GuiInput
              label="Email"
              placeholder="example@yandex.ru"
              value={email}
              error={errors[LoginFormFields.Email]}
              onChange={onChangeEmail}
              onBlur={() => resetError(LoginFormFields.Email)}
              onFocus={() => resetError(LoginFormFields.Email)}
            />

            <GuiInput
              label="Password"
              placeholder="password"
              value={password}
              error={errors[LoginFormFields.Password]}
              onChange={onChangePassword}
              onBlur={() => resetError(LoginFormFields.Password)}
              onFocus={() => resetError(LoginFormFields.Password)}
            />

            <GuiButton
              type="submit"
              btnText="Log in"
              className="login-form__btn"
            />

            <div className="login-form__info">
              Don't have an account?
              <Link to="/registration"><span className="gui-link">Sign up</span></Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
