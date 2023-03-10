export enum LoginFormFields {
  Login = 'login',
  Password = 'password',
}

export enum RegistrationFormFields {
  Firstname = 'firstname',
  Surname = 'surname',
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
  Phone = 'phone',
  Login = 'login'
}

export type LoginErrorsObj =
  | {
      login: string | null
      password: string | null
    }
  | Record<string, never>

export type RegistrationErrorsObj =
  | {
      firstname: string | null
      surname: string | null
      email: string | null
      password: string | null
      confirmPassword: string | null
      phone: string | null
      login: string | null
    }
  | Record<string, never>
export enum ProfileFormFields {
  Firstname = 'firstname',
  Surname = 'surname',
  Email = 'email',
  Password = 'password',
  ConfirmPassword = 'confirmPassword',
  OldPassword = 'oldPassword',
  DisplayName = 'displayName',
}

export type ProfileErrorsObj =
  | {
      firstname: string | null
      surname: string | null
      email: string | null
      password: string | null
      oldPassword: string | null
      displayName: string | null
    }
  | Record<string, never>
