import './RegistrationForm.scss'
import React, { FormEvent, ReactElement, useState } from 'react'
import GuiInput from '../../ui/GuiInput/GuiInput'
import GuiButton from '../../ui/GuiButton/GuiButton'
import { RegistrationErrorsObj, RegistrationFormFields } from '../../types/form'
import EasyValidator, { IValidationSchema } from '../../helpers/easy-validator'
import GuiLink from '../../ui/GuiLink/GuiLink'

const RegistrationForm = (): ReactElement => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [firstname, setFirstname] = useState('')
  const [surname, setSurname] = useState('')
  const [errors, setErrors] = useState<RegistrationErrorsObj>({
    firstname: null,
    surname: null,
    email: null,
    password: null,
    confirmPassword: null,
  })

  const schema: IValidationSchema = {
    firstname: {
      isRequired: { msg: 'Это поле обязательно для заполнения' },
      minLength: { value: 3, msg: 'Минимум 3 символа' },
      maxLength: { value: 50, msg: 'Максимум 50 символов' },
    },
    surname: {
      isRequired: { msg: 'Это поле обязательно для заполнения' },
      minLength: { value: 3, msg: 'Минимум 3 символа' },
      maxLength: { value: 50, msg: 'Максимум 50 символов' },
    },
    email: {
      isRequired: { msg: 'Это поле обязательно для заполнения' },
      isEmail: { msg: 'Введите корректный email' },
    },
    password: {
      isRequired: { msg: 'Это поле обязательно для заполнения' },
    },
    confirmPassword: {
      isRequired: { msg: 'Это поле обязательно для заполнения' },
      areEqual: {
        value: RegistrationFormFields.Password,
        msg: 'Поля не совпадают',
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
      confirmPassword,
    })

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

  const onChangeConfirmPassword = (e: FormEvent) => {
    setConfirmPassword((e.target as HTMLInputElement).value)
  }

  const resetError = (fieldName: RegistrationFormFields) => {
    const errorsObj = { ...errors, [fieldName]: '' } as RegistrationErrorsObj
    setErrors(errorsObj)
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
              label="FirstName"
              placeholder="Enter your firstname"
              value={firstname}
              error={errors[RegistrationFormFields.Firstname]}
              onChange={onChangeFirstname}
              onBlur={() => resetError(RegistrationFormFields.Firstname)}
              onFocus={() => resetError(RegistrationFormFields.Firstname)}
            />

            <GuiInput
              label="Surname"
              placeholder="Enter your surname"
              value={surname}
              error={errors[RegistrationFormFields.Surname]}
              onChange={onChangeSurname}
              onBlur={() => resetError(RegistrationFormFields.Surname)}
              onFocus={() => resetError(RegistrationFormFields.Surname)}
            />

            <GuiInput
              label="Email"
              placeholder="Enter your email"
              value={email}
              error={errors[RegistrationFormFields.Email]}
              onChange={onChangeEmail}
              onBlur={() => resetError(RegistrationFormFields.Email)}
              onFocus={() => resetError(RegistrationFormFields.Email)}
            />

            <GuiInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              error={errors[RegistrationFormFields.Password]}
              onChange={onChangePassword}
              onBlur={() => resetError(RegistrationFormFields.Password)}
              onFocus={() => resetError(RegistrationFormFields.Password)}
            />

            <GuiInput
              label="Repeat Password"
              placeholder="Confirm password"
              value={confirmPassword}
              error={errors[RegistrationFormFields.ConfirmPassword]}
              onChange={onChangeConfirmPassword}
              onBlur={() => resetError(RegistrationFormFields.ConfirmPassword)}
              onFocus={() => resetError(RegistrationFormFields.ConfirmPassword)}
            />

            <GuiButton
              type="submit"
              btnText="Sign up"
              className="registration-form__btn"
            />

            <div className="registration-form__info">
              Already have an account <GuiLink url={''} text="Log in" />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm
