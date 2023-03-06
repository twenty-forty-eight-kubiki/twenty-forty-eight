export interface IValidatorConfig {
  msg: string
  value?: string | number
}
export type TForm = Record<string, string>
export type TValidator = (
  config: IValidatorConfig,
  form: TForm
) => (value: string) => string | null

export const validators: Record<string, TValidator> = {
  isRequired: isRequired,
  minLength: minLength,
  maxLength: maxLength,
  areEqual: areEqual,
  isEmail: isEmail,
}

export function isRequired(config: IValidatorConfig, form: TForm) {
  return function (value: string) {
    if (value === '') {
      return config.msg
    } else {
      return null
    }
  }
}

export function minLength(config: IValidatorConfig, form: TForm) {
  return function (value: string) {
    if (!config.value) throw new Error('Укажите минимальное значение для поля')
    if (value.length < config.value) {
      return config.msg
    } else {
      return null
    }
  }
}

export function maxLength(config: IValidatorConfig, form: TForm) {
  return function (value: string) {
    if (!config.value) throw new Error('Укажите максимальное значение для поля')
    if (value.length > config.value) {
      return config.msg
    } else {
      return null
    }
  }
}

export function areEqual(config: IValidatorConfig, form: TForm) {
  return function (value: string) {
    if (!config.value) throw new Error('Укажите поле, с которым нужно сравнить')
    if (value !== form[config.value]) {
      return config.msg
    } else {
      return null
    }
  }
}

const EMAIL_REGEXP =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export function isEmail(config: IValidatorConfig, form: TForm) {
  return function (value: string) {
    if (!EMAIL_REGEXP.test(value)) {
      return config.msg
    } else {
      return null
    }
  }
}
