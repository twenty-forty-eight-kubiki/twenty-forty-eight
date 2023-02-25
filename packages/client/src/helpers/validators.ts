export interface IValidatorConfig {
  msg?: string;
  value?: string | number;
}
export type TForm = Record<string, string>;
export type TValidator = (config: IValidatorConfig, form: TForm) => (value: string) => string | null;
export type TValidators = Record<string, TValidator>;


export const validators: TValidators = {
  isRequired: isRequired,
  minLength: minLength,
  maxLength: maxLength,
  confirmPass: confirmPass,
  isEmail: isEmail
}

export function isRequired(config, form) {
  return function(value: string) {
    if (value === '') {
      return config.msg;
    } else {
      return null;
    }
  };
}

export function minLength(config, form) {
  return function(value: string) {
    if (value.length < config.value) {
      return config.msg;
    } else {
      return null;
    }
  };
}

export function maxLength(config, form) {
  return function(value: string) {
    if (value.length > config.value) {
      return config.msg;
    } else {
      return null;
    }
  };
}

export function confirmPass(config, form) {
  return function(value: string) {
    if (value !== form.password) {
      return config.msg;
    } else {
      return null;
    }
  };
}

const EMAIL_REGEXP = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export function isEmail(config, form) {
  return function(value: string) {
    if (!EMAIL_REGEXP.test(value)) {
      return config.msg;
    } else {
      return null;
    }
  };
}