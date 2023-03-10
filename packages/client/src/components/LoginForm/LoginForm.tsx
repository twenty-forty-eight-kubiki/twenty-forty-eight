import React, { FormEvent, ReactElement, useState } from 'react'
import GuiInput from '../../ui/GuiInput/GuiInput'
import GuiButton from '../../ui/GuiButton/GuiButton'
import { LoginErrorsObj, LoginFormFields } from '../../types/form'
import EasyValidator, { IValidationSchema } from '../../helpers/easy-validator'
import { authAPI } from '../../api/authApi'
import { apiHasError } from '../../utils/apiHasError'
import { Link, useHistory} from 'react-router-dom'
import './LoginForm.scss'


const LoginForm = (): ReactElement => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<LoginErrorsObj>({
    login: null,
    password: null,
  })
  const [formError, setFormError] = useState('')
  const history = useHistory();

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
      const loginData = {
        login: login,
        password: password
      }

      authAPI.login(JSON.stringify(loginData))
        .then(response => {
          if (apiHasError(response)) {
            setFormError(response.reason);
            return;
          }

          history.push("/settings");
        })
        .catch((e)=>console.log('error', e))
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
    setFormError('');
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
            <span className="login-form__error">{formError}</span>

            <div className="login-form__info">
              Don't have an account?
              <Link to='/registration' className="login-form__link"> Sign up</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm
