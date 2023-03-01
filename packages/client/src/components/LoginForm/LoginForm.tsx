import './LoginForm.scss'
import React, { FormEvent, ReactElement, useState } from 'react'
import GuiInput from '../../ui/GuiInput/GuiInput'
import GuiButton from '../../ui/GuiButton/GuiButton'
import {Form, FormFields} from '../../types/form'
import EasyValidator, { IValidationSchema } from '../../helpers/easy-validator'

const LoginForm = (): ReactElement => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<Form>({
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

  const resetError = (type: FormFields) => {
    const errorsObj = { ...errors, [type]: '' }
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
              error={errors[FormFields.Email]}
              onChange={onChangeEmail}
              onBlur={() => resetError(FormFields.Email)}
              onFocus={() => resetError(FormFields.Email)}
            />

            <GuiInput
              label="Password"
              placeholder="password"
              value={password}
              error={errors[FormFields.Password]}
              onChange={onChangePassword}
              onBlur={() => resetError(FormFields.Password)}
              onFocus={() => resetError(FormFields.Password)}
            />

            <GuiButton
              type="submit"
              btnText="Log in"
              className="login-form__btn"
            />

            <div className="login-form__info">
              Don't have an account? <a className="base-link">Sign up</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
