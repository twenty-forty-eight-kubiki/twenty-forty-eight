import React, { FormEvent, ReactElement, useState } from 'react'
import GuiInput from '../../ui/GuiInput/GuiInput'
import GuiButton from '../../ui/GuiButton/GuiButton'
import { LoginErrorsObj, LoginFormFields } from '../../types/form'
import EasyValidator, { IValidationSchema } from '../../helpers/easy-validator'
import { authAPI } from '../../api/authApi'
import { useHistory } from 'react-router-dom'
import { LoginRequestData } from '../../types/api/authApi'
import GuiLink from '../../ui/GuiLink/GuiLink'
import TextError from '../../ui/TextError/TextError'
import './LoginForm.scss'

const LoginForm = (): ReactElement => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<LoginErrorsObj>({
    login: null,
    password: null,
  })
  const [formError, setFormError] = useState('')
  const history = useHistory()

  const schema: IValidationSchema = {
    login: {
      isRequired: { msg: 'Это поле обязательно для заполнения' },
    },
    password: {
      isRequired: { msg: 'Это поле обязательно для заполнения' },
    },
  }

  const easyValidator = new EasyValidator(schema)

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    const errorsObj = easyValidator.validateFields({ login, password })

    setErrors({ ...errorsObj })

    if (easyValidator.isValid()) {
      const loginData: LoginRequestData = {
        login: login,
        password: password,
      }
      authAPI
        .login(loginData)
        .then(() => {
          history.push('/settings')
        })
        .catch((error: string) => {
          setFormError(error)
        })
    }
  }

  const onChangeLogin = (e: FormEvent) => {
    setLogin((e.target as HTMLInputElement).value)
  }

  const onChangePassword = (e: FormEvent) => {
    setPassword((e.target as HTMLInputElement).value)
  }

  const resetError = (type: LoginFormFields) => {
    const errorsObj = { ...errors, [type]: '' } as LoginErrorsObj
    setErrors(errorsObj)
    setFormError('')
  }

  return (
    <div className="login-form">
      <div className="login-form__inner">
        <div className="login-form__wrapper">
          <div>
            <h1 className="login-form__title">Log In</h1>

            <div className="login-form__text">Welcome to the 2048 Game!</div>
          </div>

          <form onSubmit={onSubmit}>
            <GuiInput
              label="Login"
              placeholder="login"
              value={login}
              error={errors[LoginFormFields.Login]}
              onChange={onChangeLogin}
              onBlur={() => resetError(LoginFormFields.Login)}
              onFocus={() => resetError(LoginFormFields.Login)}
            />

            <GuiInput
              label="Password"
              placeholder="password"
              value={password}
              type="password"
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
            <TextError text={formError} />
            <div className="login-form__info">
              Don't have an account?{' '}
              <GuiLink url="/registration" text="Sign up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
